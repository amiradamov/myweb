const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

function setTheme(isLight) {
  if (isLight) {
    root.classList.add('light');
  } else {
    root.classList.remove('light');
  }
}

setTheme(prefersLight.matches);
prefersLight.addEventListener('change', (event) => setTheme(event.matches));

toggle?.addEventListener('click', () => {
  const isLight = root.classList.toggle('light');
  localStorage.setItem('rk-theme', isLight ? 'light' : 'dark');
});

const saved = localStorage.getItem('rk-theme');
if (saved) {
  setTheme(saved === 'light');
}

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.textContent = 'Message sent — thank you!';
  button.disabled = true;
  form.reset();
});
