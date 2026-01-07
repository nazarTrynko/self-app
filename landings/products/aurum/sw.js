/* ============================================
   AURUM — Service Worker
   PWA Support with Offline Capabilities
   ============================================ */

const CACHE_NAME = 'aurum-v1.0.0';
const STATIC_CACHE = 'aurum-static-v1';
const DYNAMIC_CACHE = 'aurum-dynamic-v1';

// Files to cache immediately
const STATIC_ASSETS = [
    '/landings/aurum/',
    '/landings/aurum/index.html',
    '/landings/aurum/styles.css',
    '/landings/aurum/script.js',
    '/landings/aurum/data/prompts.js',
    '/landings/aurum/data/chains.js',
    '/landings/aurum/data/creators.js',
    '/landings/aurum/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[SW] Static assets cached');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] Cache failed:', err);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
                        .map((name) => {
                            console.log('[SW] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                console.log('[SW] Service Worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip external requests
    if (!url.origin.includes(self.location.origin)) {
        return;
    }
    
    // Cache-first strategy for static assets
    if (isStaticAsset(url.pathname)) {
        event.respondWith(cacheFirst(request));
        return;
    }
    
    // Network-first strategy for dynamic content
    event.respondWith(networkFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
        // Return cached version and update cache in background
        updateCache(request);
        return cachedResponse;
    }
    
    // If not in cache, fetch from network and cache
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        return offlineFallback();
    }
}

// Network-first strategy
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        return offlineFallback();
    }
}

// Update cache in background
async function updateCache(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse);
        }
    } catch (error) {
        // Silently fail - we already have cached version
    }
}

// Check if URL is a static asset
function isStaticAsset(pathname) {
    const staticExtensions = ['.css', '.js', '.json', '.png', '.jpg', '.jpeg', '.svg', '.ico', '.woff', '.woff2'];
    return staticExtensions.some(ext => pathname.endsWith(ext));
}

// Offline fallback page
function offlineFallback() {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AURUM - Offline</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'DM Sans', sans-serif;
                    background: #08080c;
                    color: #f5f5f5;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 2rem;
                }
                .offline-container {
                    max-width: 400px;
                }
                .offline-icon {
                    font-size: 4rem;
                    margin-bottom: 1.5rem;
                }
                h1 {
                    font-family: 'Crimson Text', serif;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    color: #d4a853;
                }
                p {
                    color: #8a8a9a;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }
                .retry-btn {
                    display: inline-block;
                    padding: 0.75rem 1.5rem;
                    background: linear-gradient(135deg, #d4a853, #e8b866);
                    color: #08080c;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 1rem;
                }
                .retry-btn:hover {
                    transform: translateY(-2px);
                }
            </style>
        </head>
        <body>
            <div class="offline-container">
                <div class="offline-icon">⚗️</div>
                <h1>You're Offline</h1>
                <p>AURUM needs an internet connection to transform words into gold. Please check your connection and try again.</p>
                <button class="retry-btn" onclick="window.location.reload()">Try Again</button>
            </div>
        </body>
        </html>
    `;
    
    return new Response(html, {
        status: 503,
        headers: { 'Content-Type': 'text/html' }
    });
}

// Handle background sync for offline actions
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-library') {
        event.waitUntil(syncLibrary());
    }
});

async function syncLibrary() {
    // Sync user's library when back online
    console.log('[SW] Syncing library...');
}

// Handle push notifications
self.addEventListener('push', (event) => {
    const data = event.data?.json() || {};
    
    const options = {
        body: data.body || 'New prompt available!',
        icon: '/landings/aurum/icons/icon-192x192.png',
        badge: '/landings/aurum/icons/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            url: data.url || '/landings/aurum/'
        },
        actions: [
            { action: 'view', title: 'View' },
            { action: 'dismiss', title: 'Dismiss' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title || 'AURUM', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow(event.notification.data?.url || '/landings/aurum/')
        );
    }
});

console.log('[SW] Service Worker loaded');

