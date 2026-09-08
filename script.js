// =========================================================
// INDEPENDÊNCIA DO BRASIL — INTERAÇÕES
// =========================================================

const video = document.getElementById("historicalVideo");
const placeholder = document.getElementById("videoPlaceholder");

// Esconde o placeholder quando o navegador encontra um vídeo válido.
video.addEventListener("loadedmetadata", () => {
  placeholder.classList.add("hidden");
});

video.addEventListener("canplay", () => {
  placeholder.classList.add("hidden");
});

// Animações de entrada ao rolar a página.
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach((element) => observer.observe(element));

// Ao tocar no botão, o navegador leva o visitante ao vídeo.
// O autoplay não é forçado, evitando comportamentos inesperados no celular.
document.querySelector(".cta")?.addEventListener("click", () => {
  setTimeout(() => {
    video?.focus({ preventScroll: true });
  }, 500);
});
