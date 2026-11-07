/* CAM Study — cache dei file statici; contenuti e programma network-first. */
const CACHE = 'camstudy-v3';
const STATICI = ['./', 'index.html', 'app.js', 'style.css', 'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(STATICI)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  const dinamico = url.pathname.endsWith('.json') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css') || url.pathname.endsWith('/') || url.pathname.endsWith('.html');
  if (dinamico) {
    // network-first: contenuti sempre freschi, cache solo se offline
    e.respondWith(fetch(e.request).then((r) => {
      if (r.ok) { const copia = r.clone(); const chiave = url.origin + url.pathname; caches.open(CACHE).then((c) => c.put(chiave, copia)); }
      return r;
    }).catch(() => caches.match(url.origin + url.pathname)));
  } else {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
  }
});
