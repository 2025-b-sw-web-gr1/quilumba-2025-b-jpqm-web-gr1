const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 3000;

// --- Configuración de Handlebars ---
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// --- Configuración de Archivos Estáticos (Pública) ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Datos para la vista ---
const datosMascotas = {
    tituloPagina: 'Patitas Felices: Guía de Cuidados',
    subtitulo: 'Porque ellos son familia, merecen el mejor cuidado.',
    
    // Asegúrate de que el nombre de tu foto sea correcto aquí
    imagenPrincipal: '/images/mi-fondo.jpg', 
    
    consejos: [
        {
            id: 1,
            titulo: 'Nutrición de Calidad',
            icono: '🥩',
            descripcion: 'Invierte en alimento premium adecuado para su edad y tamaño. Evita darles sobras de comida humana muy condimentada.'
        },
        {
            id: 2,
            titulo: 'Hidratación 24/7',
            icono: '💧',
            descripcion: 'El agua fresca y limpia debe estar siempre disponible. Lava su bebedero diariamente para evitar bacterias.'
        },
        {
            id: 3,
            titulo: 'Visitas Veterinarias',
            icono: '👨‍⚕️',
            descripcion: 'No esperes a que enfermen. Los chequeos anuales y mantener sus vacunas y desparasitaciones al día son vitales.'
        },
        {
            id: 4,
            titulo: 'Ejercicio y Juego',
            icono: '🎾',
            descripcion: 'El paseo diario no es negociable. El ejercicio físico y los juegos mentales previenen la obesidad y el estrés.'
        },
        {
            id: 5,
            titulo: 'Higiene Regular',
            icono: '🛁',
            descripcion: 'El cepillado frecuente reduce la caída de pelo. Baños solo cuando sea necesario y cuidado dental para evitar sarro.'
        },
        {
            id: 6,
            titulo: 'Mucho Amor y Atención',
            icono: '❤️',
            descripcion: 'Tu compañía es lo que más valoran. Dedica tiempo de calidad para mimarlos y fortalecer vuestro vínculo.'
        }
    ],
    anio: new Date().getFullYear()
};

app.get('/', (req, res) => {
    res.render('home', datosMascotas);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});