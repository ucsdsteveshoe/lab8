function initMap() {
	L.mapquest.key = 'FOyP3MEx5Zt2gym8AIdRmiOMeVHWH80A';

    // 'map' refers to a <div> element with the ID map
    L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 14,
    zoomControl: false
    });

    // This line throws an error, busting the whole system.
    // L.marker([32.88, -117.236]).addTo(map);
}