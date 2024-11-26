import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self, {
  "index.html": {},
  "favicon.ico": {},
  "manifest.json": {},
  "static/js/main.*": {}
});

registerRoute(
  ({ request }) => request.destination === 'document',
  new StaleWhileRevalidate({
    cacheName: 'html-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200, 201, 404],
      }),
    ],
  })
);
