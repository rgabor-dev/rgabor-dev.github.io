self.addEventListener('fetch', function(event) {
  console.log("Fetching", event.request.url);
  console.log("Headers", event.request.headers);
  console.log("RequestHeaders", new Set(event.request.headers));
  console.log("Request", event.request);
  console.log("Event", event);
  event.respondWith(


    fetch(event.request).then(function(response){
        console.log('Response', response);
        console.log("Headers", response.headers);
        console.log("ResponseHeaders", new Set(response.headers));
        return response;
    })


  );
});
