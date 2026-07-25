
const CACHE_NAME = 'buku-kelas1-v1';
const urlsToCache = ['index.html','manifest.json','cover.png','bab1.png','bab2.png','bab3.png','bab4.png','bab5.png','bab6.png','bab7.png','bab8.png'];
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)))});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)))});
