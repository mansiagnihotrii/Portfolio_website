self.addEventListener('install',event => {
console.log('Install event!');
});

self.addEventListener('activate',event => {
console.log('Activate event!');
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});


const cacheName = 'cache-v1';
const resourcesToPrecache = [
	'/',
	'index.html',
	'style/style.css',
	'img/blog.webp',
	'img/dog.webp',
	'img/epoller.webp',
	'img/flashcards.webp',
	'img/me.webp'
];

self.addEventListener('install',event => {
console.log('Service worker install event!');
event.waitUntil(
	caches.open(cacheName)
	.then(cache => {
		return cache.addAll(resourcesToPrecache);
	})
  );
});