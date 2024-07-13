const productos = [
    { id: 1, nombre: "", imagen: "./assets/1.jpg" },
    { id: 2, nombre: "", imagen: "./assets/2.jpg" },
    { id: 3, nombre: "", imagen: "./assets/3.jpg" },
    { id: 4, nombre: "", imagen: "./assets/4.jpg" },
    { id: 5, nombre: "", imagen: "./assets/5.jpg" },
];

const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const solicitarInfoBtn = document.getElementById('solicitar-info');

let currentIndex = 0;

function generarEnlaceWhatsApp(producto) {
    const numeroWhatsApp = "5491126322496"; // Asegúrate de que este sea el formato correcto
    const mensaje = encodeURIComponent(`Hola, me gustaría obtener más información sobre sus productos!.`);
    return `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
}

function actualizarEnlaceWhatsApp() {
    const productoActual = productos[currentIndex];
    const enlaceWhatsApp = generarEnlaceWhatsApp(productoActual);
    solicitarInfoBtn.href = enlaceWhatsApp;
}

function mostrarProductos() {
    carouselContainer.innerHTML = '';
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        const index = i % productos.length;
        const producto = productos[index];
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
        `;
        carouselContainer.appendChild(productoElement);
    }
}

function moverCarousel(direccion) {
    if (direccion === 'next') {
        currentIndex = (currentIndex + 1) % productos.length;
    } else {
        currentIndex = (currentIndex - 1 + productos.length) % productos.length;
    }
    mostrarProductos();
    actualizarEnlaceWhatsApp();
}

prevButton.addEventListener('click', () => moverCarousel('prev'));
nextButton.addEventListener('click', () => moverCarousel('next'));

document.addEventListener('DOMContentLoaded', function() {
    const contactoLink = document.getElementById('contacto-link');
    const contactoPopup = document.getElementById('contacto-popup');
    const cerrarContactoPopup = document.getElementById('cerrar-contacto-popup');

    contactoLink.addEventListener('click', function(e) {
        e.preventDefault();
        contactoPopup.style.display = 'block';
    });

    cerrarContactoPopup.addEventListener('click', function() {
        contactoPopup.style.display = 'none';
    });
});

// Inicializa el carrusel y el enlace de WhatsApp
mostrarProductos();
actualizarEnlaceWhatsApp();