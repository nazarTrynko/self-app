// THE MANTRA - Service Worker

const CACHE_NAME = 'mantra-v1';
const ASSETS = ['./', './index.html', './styles.css', './script.js', './manifest.json'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys => 
        Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ));
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached => 
            cached || fetch(e.request).then(res => {
                if (res.status === 200) {
                    const clone = res.clone();
                    caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                }
                return res;
            })
        ).catch(() => e.request.destination === 'document' ? caches.match('./index.html') : null)
    );
});

