const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(form);
  const message = [
    'سلام ChinaBridge، بغيت نستافسر.',
    'السمية: ' + fields.get('nom'),
    'الإيميل: ' + fields.get('email'),
    'الخدمة: ' + fields.get('service'),
    fields.get('message')
  ].join('\n');
  const destination = new URL('https://wa.me/212665962015');
  destination.searchParams.set('text', message);
  window.location.assign(destination.href);
});
form.querySelector('button').disabled = false;
