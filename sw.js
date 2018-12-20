let staticCache = 'cache-1';

self.addEventListener('install', function(event) {
    console.log('installing and caching');
    event.waitUntil(
        caches.open(staticCache).then(function(cache) {
            return cache.addAll(
                [
                    './',
                    './index.html',
                    './css/assign3.css',
                    './images/logo.png',
                    './images/movie.jpg',
                    './images/bill.jpg',
                    './images/james.jpg',
                    './images/jessica.png',
                    './js/app.js'
                ]
            )
        })
    )
});

self.addEventListener('fetch', function(event) {
    console.log('Fetching');
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Activating my Service Worker');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('cache') && cacheName !== staticCache;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            )
        })
    );
});
