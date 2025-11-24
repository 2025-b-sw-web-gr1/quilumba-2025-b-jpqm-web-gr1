// --- RUTAS (VISTAS) --- //
function Home() {
  return `
    <h1>Bienvenido 🏠</h1>
    <p>Haz clic para ver al gatito:</p>
    <a href="#" onclick="navigate('/gatito')">Ver gatito 😺</a>
  `;
}

function Cat() {
  return `
    <h1>¡Aquí está el gatito! 😺</h1>
    <img src="/assets/gatito.jpg" width="400">
    <br><br>
    <a href="#" onclick="navigate('/')">Volver al inicio 🏡</a>
  `;
}

// --- CONTROLADOR SPA --- //
const app = document.querySelector('#app');

function router() {
  const path = window.location.pathname;

  if (path === "/") {
    app.innerHTML = Home();
  } else if (path === "/gatito") {
    app.innerHTML = Cat();
  } else {
    app.innerHTML = `<h1>404 - Página no encontrada</h1>`;
  }
}

// Navegación SPA sin recargar
window.navigate = function (path) {
  window.history.pushState({}, "", path);
  router();
};

// Cuando navegas con los botones del navegador
window.onpopstate = router;

// Render inicial
router();
