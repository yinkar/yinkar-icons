self.addEventListener('install', e => {
    console.log('Install');
});

self.addEventListener('activate', e => {
    console.log('Activate');
});

self.addEventListener('fetch', e => {
    console.log('Fetch', e.request);
});