// Service worker mínimo: necessário para instalar o app (PWA). Os dados continuam vindo do Firebase.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
