'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "03a6f86a172b641aa11a9ecbd69c6b4f",
"main.dart.js": "986bf295aad67a50a287fab931f4878a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/les.jpg": "085f61fe016ae6bea718d55377f6953a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3aca8d9e1ec10031204234c635d1e0af",
".git/config": "15ff69ed5186fb56262003aa5b52b041",
".git/objects/61/aea1a5bf3b08dfee65fd321662575692e22dbc": "56c139f549cbf6fff6a54ddee9f601af",
".git/objects/66/078ca38b4a206b5f6a24e722224eb0c82a1023": "a5c63e030fdc821a49d19f4c09b0689f",
".git/objects/68/b3c9ecc1184d453f7c3bb6a2403f28f134c19d": "ebe156185eae3e0198076eb47032fd07",
".git/objects/69/4bcc4f8a9bc4a11473b4de34ff17a19f3eb73a": "daec5df5e2cbaf430baaea6e7bba5b6a",
".git/objects/60/523b9ed0de9ead3f4ee475bc1413d63beae387": "012889ee3aa97016501df62b8a965e8a",
".git/objects/9d/0dbfbcd58ac83b3f547080e186ccde67133ade": "3fe7a908eae55a4bdc37177ee4cb0890",
".git/objects/ad/09ea8143ef7a47151dfa29c1a82c75dbca226b": "f1ec7323f3ac1feb5c2cc95aea5d9c27",
".git/objects/bb/f55e544d6ff32277a628590753792c38c20187": "58a951a802bb500fafb9babcb98a6dab",
".git/objects/d8/63d8d49b7d704b1bded449dae05af87816e398": "40c8301c8dbf93d032122771b0ed4dff",
".git/objects/eb/019d0704d12acc0c049504adc64669bc609e67": "eccbff33eb0011506157b96a72423e29",
".git/objects/eb/fcaf6a51a77eb2f3ac591c81dbcfd8102ce529": "28c6af043f801e11a219d1070e87107e",
".git/objects/f5/ee0e0a5b61537b655cdf28dd0aff4ce929c930": "1a8f5d3c194ecc1be4251a3b6cc9dd28",
".git/objects/ca/830f1a0cb26d2e6aa279d1b29e87c545cf7a98": "48f7e41102b88451a76598dfa215ac34",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/a741ec565940af4a43c80d5360424a0b3b74ae": "f868333bd1a3ec2553059777a9b511e4",
".git/objects/29/3ed563c2e29c200edf28b43ecc6a576def1fe2": "b45b9e6282bd12d287e4685d42048a40",
".git/objects/89/ee8dec65020ca960d4f9b4e9202a6f3afcc821": "179811975f167a25017432cf3de1b134",
".git/objects/1f/2d8c58d1c47e74cb6470eab05797ef8e0d635b": "0daafaf62ad5c920a0cbc6a863c12ec4",
".git/objects/1a/b8801a445fa3ecfa325e5dff59fccd728ad7e2": "43ccb9ae346490d35dd2b7c5dc7b031a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/0dbf2fbd4eb13d108a8d6ba001a01137dcabc2": "64a3c5632760ca5b6bc834e1f192c72e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/139a5c0c5425a6ec3c735c996153faa1cf9bfa": "167f488d3cd41c77f49130d229e61c31",
".git/objects/3f/b3417d2cf2dd40ff9f88041581bf3d1f9758c9": "e430ab4ac0d727cca4a5bffc1bc2f843",
".git/objects/6d/83654087942494711035c57a6a0652682e04f8": "b74dcbfed17aab0a5b4e2b218a0a9236",
".git/objects/01/9b040cca17614c19c323d5d9090f06cc6889fb": "c51b4270b5fd9fb3e49d1633ae54e33d",
".git/objects/39/5ec4fe6d298aca81a7fb85a60f41aa3beccc43": "bbe59164a484752bb0ee06e944c6dddb",
".git/objects/52/5fb4701fe5c2da0982c7fb9916b33b9ebf5148": "a606fc0fe9c731629f0b895f1e77a917",
".git/objects/52/45848ab22f34989f7b02935c6361b33561b488": "c01269df77a16705ce6de52f2868b506",
".git/objects/55/7a3b7ee1e5e080c94fc8429c9fe72f928256b9": "a6b59981238cbd8451c300d42b814f6b",
".git/objects/a7/801b38f068ca22b8d53569b653f73445a21358": "34e175e8edea7521b04cac35529f22f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e8/97fc9a87909f82ce974feb3b9002720a0735e0": "a6773d04150e2c2eb36bc4007a008cb0",
".git/objects/fa/f344a046b710723e8b2638b21c441ab4c2bc54": "4cd98e21854679b1fbfdf05717400c4e",
".git/objects/e7/47790d1b103ea50f94140c6b8cb87bf5bf3b12": "1208b336114497f17559f9d09b935b7d",
".git/objects/e7/41f2ed83d0005f62c465e5fe5a0ac03bedd1e9": "db9b5a803bd2a84f2d419cd0b6e25571",
".git/objects/4a/b1125c4cec2ee911786b62cc12e46d990bda5f": "d5d0b2c6e83bfa1abe28fc23e53510db",
".git/objects/71/05c9f4e6b72b49dfc3b27e9c7c26b8158a00b7": "648054726d35d70d8766ada4d58d0476",
".git/objects/40/4a73a3b1f69f9d4770487057b7d760d9f2b189": "e4c70b60e706adae89fa17ddfe3f824b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "6bf631c6d1ad0e5b5972f401d8c6763b",
".git/logs/refs/heads/master": "6bf631c6d1ad0e5b5972f401d8c6763b",
".git/logs/refs/remotes/origin/master": "e09ffb55e992d07962b03be7a946234b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "6aa6106690d77cd59a556b5b68d01aa8",
".git/refs/remotes/origin/master": "6aa6106690d77cd59a556b5b68d01aa8",
".git/index": "3d6f70a580eec9abee8563026d89b6f3",
".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/FETCH_HEAD": "fab20c3fe8e6952de7d18decccd7c1e6",
"assets/LICENSE": "36d0fc47e8d468eca46e4dbe8f07ec3a",
"assets/AssetManifest.json": "6c6ec4919bf13cae200dc6679f25e78e",
"assets/FontManifest.json": "72932e0bb70016d3be5b04740955fc3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4b9123f59422885f8f42d2d613f0bca3",
"assets/fonts/MaterialIcons-Regular.ttf": "c5589b7205a16dc844ff989718416259",
"assets/assets/images/screenshots/social-app.png": "392a6770812f0d799d8f93395065dae0",
"assets/assets/images/screenshots/uber/home.png": "6bc86b0a0bc00c49720695a76b1c05e1",
"assets/assets/images/screenshots/uber/estimation.png": "facd3adce8a37dbc765f3e6048f62e3d",
"assets/assets/images/screenshots/uber/search.png": "04c323e429ae5617aa02b35f401353ca",
"assets/assets/images/screenshots/social-app-notifications.png": "345aa940d011305332cb2b635fa1d089",
"assets/assets/images/screenshots/blog-post.png": "b8e80dd95fd3e38913daa20a563f279c",
"assets/assets/images/screenshots/blog.png": "07cd9b4a7cf857d947237a92a8fea529",
"assets/assets/images/screenshots/aura.png": "a644218c1f02d165636e5ca5318b18e0",
"assets/assets/images/les.png": "260f3560e4bf8da3646c05d0e84affd9",
"assets/assets/images/home_bg.jpg": "ca2fdaaf3e6b078864760310f69ee58f",
"assets/assets/images/home_bg.png": "7851578749ab18d452f577297ac1704d",
"assets/assets/images/icons/instagram-white.png": "74100d49f800f1f4d241e3cdd494d6c6",
"assets/assets/images/icons/linkedin-white.png": "56ff0c54cfc1da4b073c6249fd71021c",
"assets/assets/images/icons/instagram.png": "5bf6011780032bb1bb97014ed24cb5a9",
"assets/assets/images/icons/github-white.png": "407b6f6ba25463193a2aac76cd8a1a26",
"assets/assets/images/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/images/icons/twitter-white.png": "032961b8b647acc7217a266d4a1e9a6c",
"assets/assets/images/icons/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/images/icons/linkedin.png": "3f25fde0440cd316a514d72011d95d5f",
"assets/assets/images/les_blue.png": "e4b560bcb816e43b9dc76b55c30d660e",
"assets/assets/fonts/Nunito_Sans/NunitoSans-ExtraBold.ttf": "505a059580cfbeaccdcb7a489bb67ec9",
"assets/assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf": "4c8f447011eef80831b45edb1e5971e0",
"assets/assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf": "08e53a516d2ba719d98da46c49b3c369",
"assets/assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf": "bd318b58018198a57723f311627492ac",
"assets/assets/fonts/Nunito_Sans/NunitoSans-Black.ttf": "d95152ab5a160491d28b3fce25bf4ff2"
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
