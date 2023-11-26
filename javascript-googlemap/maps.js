let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 17.20, lng: 78.30 },
    zoom: 8,
    mapTypeId:"terrain"
  });
  new google.maps.Marker({
      position:{ lat: 17.20, lng: 78.30 },
      map: map,
      label:"A",
      title: "Hyderabad",
      draggable: false,
      animation: google.maps.Animation.DROP
  })
}