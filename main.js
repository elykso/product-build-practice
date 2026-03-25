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

const saved = localStorage.getItem('theme');
const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(saved || preferred);

// Formspree AJAX submit
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('.submit-btn');
  btn.disabled = true;
  btn.textContent = '전송 중...';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      form.hidden = true;
      successMsg.hidden = false;
    } else {
      alert('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      btn.disabled = false;
      btn.textContent = '문의 보내기';
    }
  } catch {
    alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    btn.disabled = false;
    btn.textContent = '문의 보내기';
  }
});
