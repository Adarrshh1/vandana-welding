export function sanitize(str) {
  return String(str || '').replace(/[&<>\"']/g, (c) =>
    ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c])
  );
}

export function submitForm(e) {
  e.preventDefault();

  const name = sanitize(document.getElementById('name')?.value);
  const phone = sanitize(document.getElementById('phone')?.value);
  const work = sanitize(document.getElementById('workType')?.value);
  const message = sanitize(document.getElementById('message')?.value);
  const text = `Hello Vandana Welding Shop,%0AName: ${name}%0APhone: ${phone}%0AWork: ${work}%0AMessage: ${message}`;

  window.open(`https://wa.me/919873202362?text=${text}`, '_blank', 'noopener,noreferrer');
}
