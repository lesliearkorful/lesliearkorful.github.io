'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "756a249467f7bffcda3d47e5c959b9b2",
"main.dart.js": "9e3a36b9ef7b9bcaf5f714094635bf19",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"les.jpg": "ba12e9faf4667f93af24a30f0e154da8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/les.jpg": "085f61fe016ae6bea718d55377f6953a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d4dd57a78eb24c45014b753a3ee3ab84",
"assets/LICENSE": "36d0fc47e8d468eca46e4dbe8f07ec3a",
"assets/images/screenshots/social-app.png": "392a6770812f0d799d8f93395065dae0",
"assets/images/screenshots/uber-home.png": "6bc86b0a0bc00c49720695a76b1c05e1",
"assets/images/screenshots/blog-post.png": "b8e80dd95fd3e38913daa20a563f279c",
"assets/images/screenshots/uber-search.png": "04c323e429ae5617aa02b35f401353ca",
"assets/images/screenshots/social-notifications.png": "345aa940d011305332cb2b635fa1d089",
"assets/images/screenshots/blog.png": "07cd9b4a7cf857d947237a92a8fea529",
"assets/images/screenshots/aura.png": "a644218c1f02d165636e5ca5318b18e0",
"assets/images/screenshots/x9cinema-detail.png": "3fa4e9247333ac93ad8cd1b7ae2d7687",
"assets/images/screenshots/x9cinema-home.png": "c22ae53b3bfabcdf82a2c384e6ff4123",
"assets/images/screenshots/uber-estimation.png": "facd3adce8a37dbc765f3e6048f62e3d",
"assets/images/les.png": "260f3560e4bf8da3646c05d0e84affd9",
"assets/images/home_bg.jpg": "ca2fdaaf3e6b078864760310f69ee58f",
"assets/images/home_bg.png": "7851578749ab18d452f577297ac1704d",
"assets/images/icons/instagram-white.png": "74100d49f800f1f4d241e3cdd494d6c6",
"assets/images/icons/linkedin-white.png": "56ff0c54cfc1da4b073c6249fd71021c",
"assets/images/icons/instagram.png": "5bf6011780032bb1bb97014ed24cb5a9",
"assets/images/icons/github-white.png": "407b6f6ba25463193a2aac76cd8a1a26",
"assets/images/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/images/icons/twitter-white.png": "032961b8b647acc7217a266d4a1e9a6c",
"assets/images/icons/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/images/icons/linkedin.png": "3f25fde0440cd316a514d72011d95d5f",
"assets/images/les_blue.png": "e4b560bcb816e43b9dc76b55c30d660e",
"assets/AssetManifest.json": "9f82efb259a0c6f4842a2075aa9c4c87",
"assets/FontManifest.json": "809bb1b5913fbbe805c23b1c432c190d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4b9123f59422885f8f42d2d613f0bca3",
"assets/fonts/Nunito_Sans/NunitoSans-ExtraBold.ttf": "505a059580cfbeaccdcb7a489bb67ec9",
"assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf": "4c8f447011eef80831b45edb1e5971e0",
"assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf": "08e53a516d2ba719d98da46c49b3c369",
"assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf": "bd318b58018198a57723f311627492ac",
"assets/fonts/Nunito_Sans/NunitoSans-Black.ttf": "d95152ab5a160491d28b3fce25bf4ff2",
"assets/fonts/MaterialIcons-Regular.ttf": "c5589b7205a16dc844ff989718416259"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
