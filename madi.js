const slider = document.getElementById("slider");

// Mövcud slaydları klonlayıb sona əlavə edirik
const slides = [...slider.children];
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  slider.appendChild(clone);
});

// Mouse ilə sürüşdürmə
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (startX - x);
  slider.scrollLeft = scrollLeft + walk;

  // Sonsuz dövr: sona çatanda başa qayıt
  if (slider.scrollLeft >= slider.scrollWidth / 2) {
    slider.scrollLeft = 0;
  }
});

// ↓↓↓ Bunlar ayrıca blokda olmalıdır ↓↓↓

// button3 ilə şəkil hündürlüyünü dəyişmək
const button3 = document.querySelector(".button3");
const pictures = document.querySelector(".pictures");

button3.addEventListener("click", () => {
  if (pictures.style.height === "480px" || pictures.style.height === "") {
    pictures.style.height = pictures.scrollHeight + "px";
  } else {
    pictures.style.height = "480px";
  }
});

// sual və cavab sistemi
const sual = document.querySelectorAll('.card');

sual.forEach(item => {
  const kecid = item.querySelector('.kecid');
  const cavab = item.querySelector('.cavab');

  kecid.addEventListener('click', () => {
    const isOpen = cavab.style.display === 'block';
    cavab.style.display = isOpen ? 'none' : 'block';
    kecid.textContent = isOpen ? '+' : 'x';
  });
});
