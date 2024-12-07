'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"6565115.png": "767ea26da7fd7d95df27f9108e3477ec",
"assets/AssetManifest.bin": "a240384cebd11961ed6bd5ad603be53f",
"assets/AssetManifest.bin.json": "76a0a0ab0c289c25c8cd3fde2a1fc7da",
"assets/AssetManifest.json": "cf20cf1c84ab8c360dd80dbd84356054",
"assets/assets/fonts/BrunoAceSC-Regular.ttf": "a2b06d6a2166d7c00cfe79693fa6cfbd",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/ReemKufi-VariableFont_wght.ttf": "6e38550945d8b00bd1f77b14ccdf1a0f",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/icons/6565115.png": "767ea26da7fd7d95df27f9108e3477ec",
"assets/assets/icons/add_location.png": "96bd520cf1961887c776f488937bf5fe",
"assets/assets/icons/add_notes%2520(1).png": "7572f6faf4de3a64ebe07d62a513bcca",
"assets/assets/icons/alternate_email.png": "85990ffb699eb9f64a5eef68a6ceb6ef",
"assets/assets/icons/basil_trash-alt-outline.png": "9525b56efae0926a15ad23081831fc15",
"assets/assets/icons/bxs_up-arrow.png": "17d03633016dd76de41412bd39ad559e",
"assets/assets/icons/bx_heart.png": "62b539b0392040837669ca3febdd04a8",
"assets/assets/icons/Component%25201.png": "2b29e99a52d16f5c2a69ae3d4c3f320b",
"assets/assets/icons/copy_svgrepo.com.png": "83a27c86e77cf6c681c85c7c9a46e27c",
"assets/assets/icons/distance.png": "f0ae41fa9168d5618c2dcfde140c49e9",
"assets/assets/icons/encrypted.png": "63c0f28b44e5ae12e6425caac5c8c7a5",
"assets/assets/icons/Frame%2520(1).png": "3a1f6e9f335a72076009f677850ea7f5",
"assets/assets/icons/Frame%2520(2).png": "2ba800397c3ddbb14ff99a9493728d4c",
"assets/assets/icons/Frame%2520(3).png": "cbad017282448c5fd0d8f15f46ea368e",
"assets/assets/icons/Frame%2520(4).png": "17492bc87afab5e69669ae0b26a8046f",
"assets/assets/icons/Frame%2520(9).png": "a42a37cca3010cff3c55c5ce9c4eb640",
"assets/assets/icons/Frame%252014066%2520(1).png": "5bb36915bc88316808e57eba18695ea1",
"assets/assets/icons/Frame%252014066.png": "02d1ffb686b632a33c1d288e8fb4c0ff",
"assets/assets/icons/Frame%252014092%2520(1).png": "a0caeb93f8857df4bfc625aeb335075a",
"assets/assets/icons/Frame%252014106.png": "944b21172efef0f8e861ddedc7421620",
"assets/assets/icons/Frame%252014108.png": "8f460e6b472af6f2b91134672c1c5df7",
"assets/assets/icons/Frame%252014109.png": "cca23284bdd4b52f5cf3b93df770f738",
"assets/assets/icons/Frame%252014110.png": "ec2d7f989fb9033cf31dea629e98f3f9",
"assets/assets/icons/Frame.png": "a22a77c904eb7e8560c4fce28e2963cf",
"assets/assets/icons/gravity-ui_person.png": "78c41a9f0ab6c7ad79d557de32bc8c38",
"assets/assets/icons/iconamoon_arrow-up-2%2520(1).png": "1e8ca448dca53c27f3578a075c833ed1",
"assets/assets/icons/iconamoon_arrow-up-2.png": "cfae46e7b5cdfd3cbd892c2d2e410979",
"assets/assets/icons/iconoir_cancel.png": "444dfbe5cef82f29030fb306c82b93d8",
"assets/assets/icons/ic_round-access-time.png": "7bf4a3454fa303ac68080e7cdcda9444",
"assets/assets/icons/id_card.png": "1c90541851c4550a183b6d9466ff167d",
"assets/assets/icons/ion_search-outline.png": "8d9cde0bc475b222ec0be67a110ce548",
"assets/assets/icons/lets-icons_basket-alt-3-light.png": "35a20fb843cc4171ffb071d1c1f681e9",
"assets/assets/icons/mdi_cart-discount.png": "32b887fcc1341a49cdcba927ea344014",
"assets/assets/icons/mynaui_home.png": "bef0ca5e606a4b021e31b018a15fd946",
"assets/assets/icons/nimbus_money.png": "fc1ccafaed7bf3d71782bb1ca3b5022e",
"assets/assets/icons/password.png": "24bb7905ba5dabd5308073528437faa9",
"assets/assets/icons/phone_android.png": "834c87237217ecba2134418db7587581",
"assets/assets/icons/solar_box-linear.png": "9ed827ed8692b6ae50b25255357ceeca",
"assets/assets/icons/sort.png": "85412009f87da3235a75bfddd9aead1e",
"assets/assets/icons/store_svgrepo.com.png": "429581c3f4b493d691ec159ef94ea88b",
"assets/assets/icons/streamline_interface-edit-view-off-disable-eye-eyeball-hide-off-view.png": "8f31aa9aca3e5dc336c4eaece84a5fd9",
"assets/assets/icons/streamline_shopping-basket-1.png": "e38da70f31ee5c5b454ee560830a8f7e",
"assets/assets/icons/system-uicons_arrow-up.png": "1934f4fced8fe126191fd9a3a4f712d9",
"assets/assets/icons/tap_and_play.png": "e3c36d9eb384da81f80a2b05269d841c",
"assets/assets/icons/Untitled-2.png": "65a7ae8be34781d0f54a0029da7cf553",
"assets/assets/icons/Vector.png": "9ceda3e79095a521e0189268cb64bf56",
"assets/assets/icons/visibility%2520(1).png": "2788ab6c56920c40d2a03cd5a8fab22b",
"assets/assets/icons/visibility_off%2520(1).png": "f870f6e16b0b6c26f7f04adf61622735",
"assets/assets/images/communication.png": "ffa5eb91d247335d9bb49bba0bbac771",
"assets/assets/images/Component%25202.png": "aa80f0b808bce9cd186f135cc033cbac",
"assets/assets/images/Frame%2520(10).png": "a523507bb67a2e8a2b2cd7dbdf5dcc06",
"assets/assets/images/Frame%2520(11).png": "1399d8b32ddf093a126fd8aac761f0d2",
"assets/assets/images/Frame%2520(12).png": "da4643123912bf5772f57d3e28e85501",
"assets/assets/images/Frame%2520(13).png": "c9c3d596f9088bf3ae405c33a1b98052",
"assets/assets/images/Frame%2520(6).png": "a22e35af16b280ba2b5b9e09c4ed9ee7",
"assets/assets/images/Frame%2520(7).png": "603121846d9c2e8190216bf309e04ddc",
"assets/assets/images/Frame%2520(8).png": "eeba262c1387ea3c45fe5a439241b81e",
"assets/assets/images/Frame%252014138%2520(1).png": "e36d31af0acdb799cc9d9521152d7b1d",
"assets/assets/images/Group%2520(2).png": "df1f66b52bb28647b3584af4320a174d",
"assets/assets/images/Group%2520(3).png": "6267c89a2b7744bbd58b58f5057452c0",
"assets/assets/images/Group%2520(4).png": "59d3f955231f6bbbf982f4a9614fffe2",
"assets/assets/images/Group%2520(5).png": "48176bc722bc15f4b6e8a6da6e5b1b66",
"assets/assets/images/Group.png": "f9ff80ac286cd8c1680d7a9daf3937ba",
"assets/assets/images/icomoon-free_facebook2.png": "9d9e0eb12ef00a1b6fa9def7346dec01",
"assets/assets/images/insta.png": "b224cf13365bbe2bcf5121ab818f31fa",
"assets/assets/images/line%2520&%2520Area.png": "47ec9d32218f6a9a95475ba85b492815",
"assets/assets/images/logos_whatsapp-icon.png": "7f80284b1bec69a67fbe637927e22702",
"assets/assets/images/Star%25201.png": "8f1e50a0b16fe571e819d5bcd9c6729f",
"assets/assets/images/unsplash_7blBEC7CaGs.png": "80347a9dca3393855da8a74c686edd1c",
"assets/assets/images/unsplash_QC5CMsIt6B8.png": "3140b049ff512acceb2cf2c4720c04f8",
"assets/assets/images/unsplash_QPNaz7qS16c.png": "c987fdf1753a073fc8b0b93a73ae2058",
"assets/assets/images/unsplash_VLc_BK2LT5M.png": "1a179570a9314fb848375740175c8e3e",
"assets/FontManifest.json": "441608322aee3ca76a0a9582c1743dd7",
"assets/fonts/MaterialIcons-Regular.otf": "19a4d413f5b6107b5e8ab5371477bb3d",
"assets/NOTICES": "cb9b6fd6e5df65d1d55897702b746364",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"flutter_bootstrap.js": "dcae3b24e93fdd358c9872fee4a8e190",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "794c38a30ad9b9616a34a03aa7c15b42",
"/": "794c38a30ad9b9616a34a03aa7c15b42",
"main.dart.js": "d1d9824e2aeb7f389e23d53f7af9aa08",
"manifest.json": "2ae0c8b7eff14c3aadd7960a9d320529",
"version.json": "2fc5e1f718309da83471f65e818c406d"};
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
