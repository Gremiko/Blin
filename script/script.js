// Yandex MAP
let map;
let marker;
function initMap() {
  map = new ymaps.Map("yandexmap", {
    center: [55.506204, 36.017457],
    zoom: 17,
  });
  marker = new ymaps.Placemark([55.506204, 36.017457], {
    hintContent: "Блинная Можайск",
    balloonContent: "Блинная в г.Можайск. Кафе для всей семьи!",
  });
  map.geoObjects.add(marker);
}
ymaps.ready(initMap);

//Modal Window
function openModal() {
  document.getElementById("modal").style.top = "0px";
}

function closeModal() {
  document.getElementById("modal").style.top = "-900px";
}
