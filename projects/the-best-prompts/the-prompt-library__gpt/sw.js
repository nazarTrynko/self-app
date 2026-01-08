/* Minimal offline cache for the portal (best-effort). */
const CACHE = "prompt-library-v2";
const PRECACHE = [
  "./",
  "./index.html",
  "./styles/shared.css",
  "./styles/hub.css",
  "./scripts/shared.js",
  "./scripts/hub.js",
  "./styles/chambers/decisions.css",
  "./styles/chambers/content.css",
  "./styles/chambers/reflection.css",
  "./styles/chambers/healing.css",
  "./styles/chambers/creation.css",
  "./scripts/chambers/decisions.js",
  "./scripts/chambers/content.js",
  "./scripts/chambers/reflection.js",
  "./chambers/decisions/",
  "./chambers/content/",
  "./chambers/reflection/",
  "./chambers/healing/",
  "./chambers/creation/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
      .catch(() => {})
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => cached);
    })
  );
});


