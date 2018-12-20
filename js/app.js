if(navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
    .then(function() {
        console.log('Service Worker Installed');
    })
    .catch(function() {
        console.log('Service Worker Did Not Installed');
    })
}
