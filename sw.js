const CACHE = 'mac-mastery-v1.4';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  console.log('[SW] Installing new version:', CACHE);
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  console.log('[SW] Activating new version:', CACHE);
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', e => {
  // Network-first for HTML to always get fresh content
  if (e.request.mode === 'navigate' || e.request.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          // Cache the new version
          caches.open(CACHE).then(cache => cache.put(e.request, response.clone()));
          return response;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match('/index.html')))
    );
  } else {
    // Cache-first for other assets
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request))
    );
  }
});
