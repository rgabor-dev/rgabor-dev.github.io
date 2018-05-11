self.addEventListener('fetch', function(event) {
  console.log("Fetching", event.request.url);
  console.log("Event", new Set(event));
  event.respondWith(fetch(event.request));
});

