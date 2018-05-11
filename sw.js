self.addEventListener('fetch', function(event) {
  console.log("Fetching", event.request.url);
  console.dir(event);
  event.respondWith(fetch(event.request));
});

