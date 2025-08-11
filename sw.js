
// Simple cache for THREE and the main HTML
const CACHE = 'snake3d-v8-cache';
const ASSETS = [
  './Snake3D_V8_selfcontained.html',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.149.0/three.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(res => {
      return res || fetch(event.request).then(resp => {
        // Cache-catch for future
        if (event.request.url.includes('three.min.js')) {
          const respClone = resp.clone();
          caches.open(CACHE).then(c => c.put(event.request, respClone));
        }
        return resp;
      }).catch(() => res);
    })
  );
});
