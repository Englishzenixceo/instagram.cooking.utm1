const form = document.getElementById('phoneForm');
const messageEl = document.getElementById('message');

// ====== تنظیمات تلگرام ======
// این دو مقدار رو با اطلاعات بات و چت خودتون جایگزین کنید
const TELEGRAM_BOT_TOKEN = '8538849342:AAFCoJ8scmpZMR10ZLEwpyc4awUbLDdstBw
'; // مثال: 123456789:AAExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const TELEGRAM_CHAT_ID = '
541619215
';     // مثال: 123456789
// =============================

form.addEventListener('submit', function (e) {
  e.preventDefault(); // جلوگیری از رفرش شدن صفحه

  const phone = form.querySelector('#phone').value.trim();

  if (!phone) {
    return;
  }

  messageEl.textContent = 'در حال ارسال...';
  messageEl.style.color = '#4B6B5E';

  const text = `📱 شماره جدید ثبت شد:\n${phone}\n🕒 ${new Date().toLocaleString('fa-IR')}`;

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  fetch(telegramUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: text
    })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
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
