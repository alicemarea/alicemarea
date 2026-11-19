const eye = document.getElementById("eye");
const iris = document.getElementById("eye-iris");

// nx e ny vanno da -1 a 1: spostano iride e pupilla dentro l'occhio
function look(nx, ny) {
  iris.style.transform = `translate(${nx * 16}px, ${ny * 7}px)`;
}

// mouse (e dito che si muove sullo schermo): l'occhio guarda verso il puntatore
window.addEventListener("pointermove", (e) => {
  const r = eye.getBoundingClientRect();
  const dx = e.clientX - (r.left + r.width / 2);
  const dy = e.clientY - (r.top + r.height / 2);
  look(Math.max(-1, Math.min(1, dx / 300)), Math.max(-1, Math.min(1, dy / 200)));
});

// su telefono e tablet non c'è il mouse: l'occhio si guarda attorno da solo
const touchOnly = window.matchMedia("(hover: none)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (touchOnly && !reduceMotion) {
  setInterval(() => look(Math.random() * 2 - 1, Math.random() * 2 - 1), 2500);
}
