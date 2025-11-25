const express = require('express');
const path = require('path');

const app = express();

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

app.get('/gatito', (req, res) => {
  // Puedes pasar datos al template si quieres
  res.render('cat', { title: 'Gatito', name: 'Mishito' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
