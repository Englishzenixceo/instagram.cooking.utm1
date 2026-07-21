const form = document.getElementById('phoneForm');
const messageEl = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // جلوگیری از رفرش شدن صفحه

  const formData = new FormData(form);

  messageEl.textContent = 'در حال ارسال...';
  messageEl.style.color = '#4B6B5E';

  // اصلاح برای سازگاری با مرورگر اینستاگرام
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      messageEl.textContent = 'شماره شما با موفقیت ثبت شد. به‌زودی باهات تماس می‌گیریم!';
      messageEl.style.color = '#0E6B4F';
      form.reset();
    } else {
      messageEl.textContent = 'خطا در ارسال. لطفاً دوباره تلاش کنید.';
      messageEl.style.color = '#c0392b';
    }
  };
  xhr.onerror = function () {
    messageEl.textContent = 'مشکلی در اتصال پیش آمد. لطفاً دوباره تلاش کنید.';
    messageEl.style.color = '#c0392b';
  };
  xhr.send(formData);
});
