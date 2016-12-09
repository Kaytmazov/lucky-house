ymaps.ready(init);
var myMap, 
  myPlacemark;

function init(){ 
  myMap = new ymaps.Map("map", {
    center: [41.02025593, 28.93892475],
    zoom: 16,
    controls: []
  }); 
  
  myMap.controls.add('fullscreenControl');

  myMap.controls.add('zoomControl', {
    float: 'none', 
    position: {
      top: 60,
      right: 10
    }
  });

  myPlacemark = new ymaps.Placemark([41.01919957, 28.94564100], {
    hintContent: 'Lucky House!'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/marker.png',
    // Размеры метки.
    iconImageSize: [232, 99],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-130, -85]
  });
  
  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable('scrollZoom'); 
}