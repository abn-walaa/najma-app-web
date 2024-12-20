'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9d8ad118d83b74b983837faff66e85f5",
"assets/AssetManifest.bin.json": "edf83c24f33d4d69bf3aaea6e06268e7",
"assets/AssetManifest.json": "6630e4a74fcb4bc04b5e87915ffe569b",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/icons/akar-icons_copy.png": "923877d08886a7923714aeb8c1a10122",
"assets/assets/icons/fluent-mdl2_product-variant.png": "4a791b213a48ec0192199c8a973b8fa9",
"assets/assets/icons/fluent_location-28-regular.png": "e27a928cac8cca4e535ccd9442f9c844",
"assets/assets/icons/Frame%252014077.png": "6372b7e93dbce8b39150316ddd84b8b2",
"assets/assets/icons/Frame%252014085.png": "dcd0dd6143c76fb90839b9698e848a75",
"assets/assets/icons/gg_more-o.png": "63b9574db69148eb7d8c8be75d057541",
"assets/assets/icons/icon-park-outline_more-app.png": "01531bc62e168a1ec85f2395eeaed9d0",
"assets/assets/icons/icon-park-outline_order.png": "6f8e9a8d42c28c4f0dca30a1d4745016",
"assets/assets/icons/iconamoon_discount-light.png": "2141da81d21272bca1b71c2563f52948",
"assets/assets/icons/iconoir_search.png": "7824b0b245fd5a51f09818c1bb3a6dc5",
"assets/assets/icons/icons8-about-me%25201.png": "3d6b7cde4635ca642da8152849feb1da",
"assets/assets/icons/icons8-add-properties%25201.png": "00b3d23b6bc9fa9721c1f7b7d368074d",
"assets/assets/icons/icons8-category%25202.png": "17d42de7b970f0288cff17f314d7c74d",
"assets/assets/icons/icons8-productivity%2520(1)%25201.png": "0d2bc8d663fd568ba0b98b0af380302f",
"assets/assets/icons/icons8-productivity%2520(2)%25201.png": "91ae03d985193409a5af5389b4873ea2",
"assets/assets/icons/icons8-push-notifications%25201.png": "e8331d0a37ba1a911231d0c698620e9e",
"assets/assets/icons/icons8-shipping-location%25201.png": "27d4e621ef4fd317c1038bc7d475a145",
"assets/assets/icons/icons8-statistic%25201.png": "5d10e62e3dd7850df2b0c5cd2396e5c6",
"assets/assets/icons/icons8-tracking%2520(1)%25201.png": "f91b6da5e7d23b8ef1c0802bfe4ef35d",
"assets/assets/icons/la_users-cog.png": "b12a991b800893866215b1fe7c6dbca7",
"assets/assets/icons/lucide_image-plus.png": "c340a4414e142d63a8e69c0d7d431a2b",
"assets/assets/icons/material-symbols_expand-more.png": "cbbf80a713a5a0d1922ffadafaff2ba0",
"assets/assets/icons/mdi_password-outline.png": "977389cefe9a2d06ec10c1fb6dece248",
"assets/assets/icons/mingcute_add-line.png": "c947e9779842a604d70eaa187aa6daa8",
"assets/assets/icons/octicon_person-16.png": "e7db998cd9b45a61f1dee6f2f6f88eec",
"assets/assets/icons/solar_download-outline.png": "fb1c9f3dcdb8081163527329554f19ed",
"assets/assets/icons/solar_slider-horizontal-line-duotone.png": "6b9b7dbdc67f27dff95c871f762ca629",
"assets/assets/icons/solar_trash-bin-trash-broken.png": "4973f1287e72f2c1a6e103fb4a023551",
"assets/assets/icons/solar_user-block-bold.png": "edd4995b7d051c627dcd6c3f52525f07",
"assets/assets/icons/solar_user-bold-duotone.png": "04e1828343cfd6468e5c0676a47b0bfa",
"assets/assets/icons/streamline_interface-edit-view-off-disable-eye-eyeball-hide-off-view.png": "08ac07ac5c2b88eacb78fa0208114f86",
"assets/assets/icons/system-uicons_arrow-up.png": "60cb0fd46dde9ed67f7bf0293ea6f132",
"assets/assets/icons/Vector%2520(2).png": "ce9af984ab3d32f1aedb4b84f31a1d78",
"assets/assets/icons/Vector.png": "0119e1725239e22da100ef8f882f78e5",
"assets/assets/images/3d-casual-life-delivery-truck-and-cardboard-boxes%25201.png": "a2b7e6224018ad5cb9807c1bf241c6ee",
"assets/assets/images/3d-casual-life-discount-tag-and-megaphone%25201.png": "5921b0528cd698ccf56e700dc090d384",
"assets/assets/images/3d-casual-life-e-commerce-completed-order%25201.png": "120587e2990123691bd6e66e0a3fc673",
"assets/assets/images/3d-casual-life-megaphone-marketing%25201.png": "29ad44794365ce53425ece170ede74f6",
"assets/assets/images/3d-casual-life-open-box-with-coupons%25201.png": "595491e179e79596a57fe513e901a30b",
"assets/assets/images/casual-life-3d-pink-location-marker%25201.png": "2aeccf49d49dfd79b6b12b4dbc3b72b9",
"assets/assets/images/casual-life-3d-three-quarter-view-of-sale-badge%25201.png": "75f83ba9a007393e8dc66aac3d32e8e6",
"assets/assets/images/logos_facebook.png": "068b5bbc5481e3c85134d91851290905",
"assets/assets/images/logos_whatsapp-icon.png": "79583743d0023c68d3dc7a1305d5ac89",
"assets/assets/images/person.png": "8cd712dbcdd9973d39a9402dfd9d6042",
"assets/assets/images/Property%25201=Default%2520(1).png": "f1692c33b9504bf9512e6c2451a02f60",
"assets/assets/images/skill-icons_instagram.png": "aba6129727718d8eeaeebe9957e7bde1",
"assets/FontManifest.json": "ea8f07d23bf9d2759cb2cef6608bafc6",
"assets/fonts/MaterialIcons-Regular.otf": "829c43c8362a5453b475a4379fde08e3",
"assets/NOTICES": "156efc51056e5c32464932621732ab7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0e751781eb4fd34042ab1c4ebd848637",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "39a9dac998ac682e9856648b5aefd020",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f73f8e475032299924c59953b45339bb",
"/": "f73f8e475032299924c59953b45339bb",
"main.dart.js": "c8bc0843fa37bfa1da289a5eb1c10d87",
"manifest.json": "336ca96f78f74168a60714da715ac8f6",
"version.json": "5b1b58d8fed0f71e8f4d6777f952f121"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
