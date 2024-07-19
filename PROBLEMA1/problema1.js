const house = {
    imagen: [
        'IMG/casa1.jpg',
        'IMG/casa2.jpg',
        'IMG/casa3.1.jpg',
        'IMG/casa4.jpg',
        'IMG/casa5.jpg',
        'IMG/casa6.1.jpg',
        'IMG/casa7.1.jpg',
        'IMG/casa8.jpg',
        'IMG/casa9.jpg',
        'IMG/casa10.1.jpg'
    ],
    area: '380 m²',
    precio: '$589,000',
    ubicacion: 'CHOSICA - LIMA - PERU'
};

let currentIndex = 0;

function showImage(index) {
    const imagen = document.getElementById('imagen');
    const area = document.getElementById('area');
    const precio = document.getElementById('precio');
    const ubicacion = document.getElementById('ubicacion');
    const detalles = document.getElementById('detalles');
    const mensaje = document.getElementById('mensaje');

    if (index >= 0 && index < house.imagen.length) {
        imagen.src = house.imagen[index];
        if (index === house.imagen.length - 1) {
            area.textContent = `Área: ${house.area}`;
            precio.textContent = `Precio: ${house.precio}`;
            ubicacion.textContent = `Lugar: ${house.ubicacion}`;
            detalles.style.display = 'block';
        } else {
            detalles.style.display = 'none';
        }
        mensaje.textContent = '';
    } else {
        mensaje.textContent = 'No hay más imágenes disponibles.';
    }
}

function showPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
}

function showNext() {
    if (currentIndex < house.imagen.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});
