self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Offline', {
        status: 503,
        statusText: 'Offline'
      });
    })
  );
});
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/mkids-pwa/sw.js')
      .then(() => console.log('SW registrado'))
      .catch(err => console.error('SW error', err));
  });
}
</script>
