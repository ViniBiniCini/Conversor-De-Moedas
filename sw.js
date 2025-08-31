
// O nome do cache. Mude este nome se você fizer alterações nos arquivos.
const cacheName = 'pwa-teste-cache-v1';

// Uma lista dos arquivos para serem cacheados.
const arquivosParaCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/index.js',
  '/robo.js'

];


self.addEventListener('install', evento=> {
  evento.waitUntil(
    caches.open(cacheName)
      .then(cache => {
    
        return cache.addAll(arquivosParaCache);
      })
  );

});


self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {

            return caches.delete(cache);
          }
        })
      );
    })
  );
});


self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => {
        return response || fetch(e.request);
      })
  );
});

