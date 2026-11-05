// Fotos faltantes: si el archivo todavía no está en assets/img/, se quita la
// imagen rota y queda visible el recuadro arena con "Foto de Mariana".
// Al pegar la foto con el nombre indicado en el HTML, aparece sola.
document.querySelectorAll(".photo__img").forEach((img) => {
  const hideBroken = () => img.remove();
  if (img.complete && img.naturalWidth === 0) hideBroken();
  else img.addEventListener("error", hideBroken);
});

// Menú plegable en móvil (mejora progresiva).
// Sin JS, el menú queda como una fila con scroll horizontal y todo funciona igual.

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("menu");

if (header && toggle && nav) {
  const desktop = window.matchMedia("(min-width: 60rem)");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("site-nav--open", open);
  };

  header.classList.add("site-header--enhanced");
  toggle.hidden = false;

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Al elegir una sección, se cierra para que el header no tape el contenido
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Si se agranda la ventana con el menú abierto, vuelve al estado cerrado
  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
