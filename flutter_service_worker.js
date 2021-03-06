'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "756a249467f7bffcda3d47e5c959b9b2",
"main.dart.js": "3a6a0deef1936c8e68007abcc93b73c2",
"les.jpg": "ba12e9faf4667f93af24a30f0e154da8",
"icons/les.jpg": "085f61fe016ae6bea718d55377f6953a",
"manifest.json": "d4dd57a78eb24c45014b753a3ee3ab84",
"assets/LICENSE": "36d0fc47e8d468eca46e4dbe8f07ec3a",
"assets/images/screenshots/social-app.png": "ac5d3d5d190564c44b05fd0e860c2134",
"assets/images/screenshots/uber-home.png": "55693fdba5facfaed8231a486b31061d",
"assets/images/screenshots/blog-post.png": "49e445dac3b87973c9c779fd86fb0dbb",
"assets/images/screenshots/uber-search.png": "4cb0b2100040bc0052cddaec3bdba289",
"assets/images/screenshots/social-notifications.png": "e6e6259ff5e823ef221f4ebbae1c678f",
"assets/images/screenshots/blog.png": "92cf5e5f8b1231f1b1a994c9194b97db",
"assets/images/screenshots/aura.png": "a645a176a534579622b00022edfb8f35",
"assets/images/screenshots/aura-editor.png": "84e1a36ad5e6deb9e7f3802118d80ace",
"assets/images/screenshots/x9cinema-detail.png": "f43cf4212e549c9d586bd697e340c5a8",
"assets/images/screenshots/aura-story.png": "a0a6f9338f7d3f569b00d7e28baa98e3",
"assets/images/screenshots/x9cinema-home.png": "c78f9fe63fe03e05547e22ca102b4521",
"assets/images/screenshots/uber-estimation.png": "3b0333eba2d8d662be5d929cba8c15e3",
"assets/images/les.png": "260f3560e4bf8da3646c05d0e84affd9",
"assets/images/aura-home-hero.png": "b8cf82232f9d035438e3b7469b315db0",
"assets/images/icons/instagram-white.png": "74100d49f800f1f4d241e3cdd494d6c6",
"assets/images/icons/linkedin-white.png": "56ff0c54cfc1da4b073c6249fd71021c",
"assets/images/icons/github-white.png": "407b6f6ba25463193a2aac76cd8a1a26",
"assets/images/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/images/icons/twitter-white.png": "032961b8b647acc7217a266d4a1e9a6c",
"assets/images/icons/play-store.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/images/les_blue.png": "e4b560bcb816e43b9dc76b55c30d660e",
"assets/AssetManifest.json": "3f5dc1c5eb0f48fc057c4ed91d8a2d46",
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
