// Service Worker — Control de Glucosa
// De momento solo deja preparada la base para trabajar offline.
// Iremos anadiendo aqui el cacheo de archivos y la logica de notificaciones.

const CACHE_NAME = "control-glucosa-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Por ahora no interceptamos peticiones; esto lo iremos completando
  // cuando anadamos el cacheo real para el modo offline.
});
