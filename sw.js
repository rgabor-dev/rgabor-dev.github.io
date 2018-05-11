self.addEventListener('fetch', function(event) {
  console.log("Fetching", event.request.url);
  console.log("Request", event.request);
  console.log("Event", event);
  event.respondWith(fetch(event.request));
});

