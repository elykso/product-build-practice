// Theme toggle
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  toggle.textContent = theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', theme);
}

toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// Apply saved or system preference on load
const saved = localStorage.getItem('theme');
const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(saved || preferred);
