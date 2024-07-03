var map = L.map('map').setView([-7.6060689,110.6451638], 17); // Ganti koordinat dengan lokasi Umbul Ponggok

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([-7.6060689,110.6451638]).addTo(map) // Ganti koordinat dengan lokasi Umbul Ponggok
        .bindPopup('Umbul SiGedhang, Klaten.')
        .openPopup();