const form = document.getElementById('phoneForm');
const messageEl = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  messageEl.textContent = 'در حال ارسال...';
  messageEl.style.color = '#4B6B5
