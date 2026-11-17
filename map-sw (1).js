// 거래처 지도 홈 화면 앱용 (자료를 저장하지 않고 그대로 인터넷에서 받아옴)
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  if (e.request.mode === 'navigate') { e.respondWith(fetch(e.request)); }
});
