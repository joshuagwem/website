function initMap() {
    const coordinates = {
      lat: 29.55192,
      lng: -95.09808
    };
    const map = new google.maps.Map(document.getElementById("nasamap"), {
      zoom: 17,
      center: coordinates,
    });
    const marker = new google.maps.Marker({
      position: coordinates,
      map: map,
    });
    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
            position: { lat: 29.551836083240026, lng: -95.0981044 },
            pov: {
                heading: 230,
                pitch: 10,
            }
        }
    );

    map.setStreetView(panorama);
    // const independencePlaza = [
    //     { lat: 29.551872396540023, lng: -95.09743499053812 },
    //     { lat: 29.55205264219202, lng: -95.09741487397146 },
    //     { lat: 29.552029892758572, lng: -95.09725947364933 },
    //     { lat: 29.551857230224634, lng: -95.09729300126043 }
    // ]
    // const indPlazaPolygon = new google.maps.Polygon({
    //     paths: independencePlaza,
    //     strokeColor: "#FF0000",
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: "#FF0000",
    //     fillOpacity: 0.35,
    // });

    // indPlazaPolygon.setMap(map);
  }
  window.initMap = initMap;