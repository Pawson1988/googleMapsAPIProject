function initMap() {
  map = new google.maps.Map(mapEl, {
    zoom: 15,
    center: {
      lat: 41.547984,
      lng: 2.108701,
    },
    zoomControl: false,
    scaleControl: true,
    mapId: "1a161a5c555dfc9a",
  });

  for (let i = 0; i < markersArr.length; i++) {
    let marker = new google.maps.Marker({
      position: {
        lat: markersArr[i].Lat,
        lng: markersArr[i].Lng,
      },
      map,
      title: markersArr[i].title,
      icon: {
        url: markersArr[i].iconUrl,
        scaledSize: new google.maps.Size(50, 50),
      },
    });

    const infowindow = new google.maps.InfoWindow({
      content: markersArr[i].infoContent,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: true,
      });
    });
  }
}
