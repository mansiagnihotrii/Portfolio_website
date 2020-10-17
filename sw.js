self.addEventListener('install',event => {
console.log('Install event!');
});

self.addEventListener('activate',event => {
console.log('Activate event!');
});

self.addEventListener('fetch',event => {
console.log('Fetch interrupted for: ',event.request.url);
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