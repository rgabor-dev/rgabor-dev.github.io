self.addEventListener('fetch', function(event) {
  console.log("Fetching", event.request.url);
  console.log("Request", JSON.stringify(event.request));
  console.log("Event", JSON.stringify(event));
  event.respondWith(fetch(event.request));
});

