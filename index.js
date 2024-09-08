document.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        // autoplay: 3000,
    }).mount();     
});

// Создаем карту и устанавливаем начальные координаты и уровень зума
const map = L.map('map').setView([51.505, -0.09], 13);

// Добавляем слой карты (tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Добавляем маркер на карту
const marker = L.marker([51.505, -0.09]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
 