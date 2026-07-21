const form = document.getElementById('phoneForm');
const messageEl = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // جلوگیری از رفرش شدن صفحه

  const formData = new FormData(form);

  messageEl.textContent = 'در حال ارسال...';
  messageEl.style.color = '#4B6B5E';

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then((response) => {
      if (response.ok) {
        messageEl.textContent = 'شماره شما با موفقیت ثبت شد. به‌زودی باهات تماس می‌گیریم!';
        messageEl.style.color = '#0E6B4F';
        form.reset();
      } else {
        messageEl.textContent = 'خطا در ارسال. لطفاً دوباره تلاش کنید.';
        messageEl.style.color = '#c0392b';
      }
    })
    .catch(() => {
      messageEl.textContent = 'مشکلی در اتصال پیش آمد. لطفاً دوباره تلاش کنید.';
      messageEl.style.color = '#c0392b';
    });
});
