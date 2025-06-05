function initIndex() {
  const form = document.getElementById('verify-form');
  if (!form) return;
  const input = document.getElementById('phone');
  const error = document.getElementById('error-message');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = input.value.trim();
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!regex.test(value)) {
      error.style.display = 'block';
      return;
    }
    error.style.display = 'none';
    window.location.href = 'analysis.html?numero=' + encodeURIComponent(value);
  });
}

function initAnalysis() {
  const span = document.getElementById('number-span');
  if (!span) return;
  const params = new URLSearchParams(window.location.search);
  const numero = params.get('numero') || '';
  span.textContent = numero;
  setTimeout(function () {
    window.location.href = 'results.html?numero=' + encodeURIComponent(numero);
  }, 15000);
}

function initResults() {
  const span = document.getElementById('numero-consultado');
  if (!span) return;
  const params = new URLSearchParams(window.location.search);
  const numero = params.get('numero') || '';
  span.textContent = numero;
  const btn = document.getElementById('new-query');
  if (btn) btn.addEventListener('click', () => { window.location.href = 'index.html'; });
}

document.addEventListener('DOMContentLoaded', function () {
  initIndex();
  initAnalysis();
  initResults();
});
