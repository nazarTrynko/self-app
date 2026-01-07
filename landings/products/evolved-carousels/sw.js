/**
 * Service Worker for Evolved Carousels
 * Enables offline functionality and caching
 */

const CACHE_NAME = 'evolved-carousels-v1';
const ASSETS_TO_CACHE = [
    '/landings/products/evolved-carousels/',
    '/landings/products/evolved-carousels/index.html',
    '/landings/products/evolved-carousels/src/themes/warm.css',
    '/landings/products/evolved-carousels/src/core/carousel-engine.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/base.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/heartbeat.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/matrix.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/water.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/spotlight.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/sunrise.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/ember.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/watercolor.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/soundwave.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/leaves.js',
    '/landings/products/evolved-carousels/src/core/canvas-backgrounds/daynight.js'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching assets...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Skip external requests
    if (!event.request.url.startsWith(self.location.origin)) return;
    
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Return cached version
                    return cachedResponse;
                }
                
                // Fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200) {
                            return response;
                        }
                        
                        // Clone the response
                        const responseToCache = response.clone();
                        
                        // Cache the fetched response
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Return offline fallback for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match('/landings/products/evolved-carousels/index.html');
                        }
                    });
            })
    );
});

