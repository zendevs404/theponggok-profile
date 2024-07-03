var map = L.map('map').setView([-7.6137533,110.6361799], 15); // Ganti koordinat dengan lokasi Umbul Ponggok

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var marker = L.marker([-7.6137533,110.6361799]).addTo(map) // Ganti koordinat dengan lokasi Umbul Ponggok
        .bindPopup('Umbul Ponggok, Klaten.')
        .openPopup();