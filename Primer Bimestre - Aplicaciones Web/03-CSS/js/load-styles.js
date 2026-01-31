// load-styles.js: funciones para demostrar distintas formas de cargar estilos
document.addEventListener('DOMContentLoaded', () => {
  const btnInlineJS = document.getElementById('btn-inline-js');
  const btnLoadLink = document.getElementById('btn-load-link');
  const btnFetchInject = document.getElementById('btn-fetch-inject');
  const btnShadow = document.getElementById('btn-shadow');

  btnInlineJS && btnInlineJS.addEventListener('click', () => {
    const el = document.getElementById('inline-js');
    // Usando la propiedad style (element.style)
    el.style.color = 'white';
    el.style.backgroundColor = '#333';
    el.style.padding = '8px';
    el.style.borderRadius = '4px';
  });

  btnLoadLink && btnLoadLink.addEventListener('click', () => {
    // Crea un <link> y lo añade al head para cargar css/dynamic.css
    if (document.getElementById('dynamic-link')) return alert('Hoja dinámica ya cargada');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/dynamic.css';
    link.id = 'dynamic-link';
    document.head.appendChild(link);
    link.addEventListener('load', () => alert('Hoja dinámica cargada: css/dynamic.css'));
  });

  btnFetchInject && btnFetchInject.addEventListener('click', async () => {
    // Fetch del archivo CSS y creación de un <style> con su contenido
    try {
      const resp = await fetch('css/dynamic.css');
      if (!resp.ok) throw new Error('Error cargando CSS');
      const text = await resp.text();
      const style = document.createElement('style');
      style.id = 'fetched-style';
      style.appendChild(document.createTextNode(text));
      document.head.appendChild(style);
      alert('CSS cargado via fetch e inyectado en <style>');
    } catch (err) {
      console.error(err);
      alert('No se pudo cargar el CSS por fetch');
    }
  });

  btnShadow && btnShadow.addEventListener('click', () => {
    const host = document.getElementById('shadow-host');
    if (!host) return;
    if (host.shadowRoot) return alert('Shadow DOM ya creado');
    const shadow = host.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = `
      .shadow-box { padding:10px; background: #222; color: #fff; border-radius:6px; }
      .shadow-box b { color: #ffd700; }
    `;
    const content = document.createElement('div');
    content.className = 'shadow-box';
    content.innerHTML = '<b>Shadow DOM:</b> estilos encapsulados dentro del componente.';
    shadow.appendChild(style);
    shadow.appendChild(content);
  });
});
