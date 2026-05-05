(() => {
  const button = document.querySelector('[data-copy]');
  const feedback = document.querySelector('.feedback');

  if (!button || !feedback) return;

  button.addEventListener('click', async () => {
    const copiado = button.getAttribute('data-copy');

    try {
      await navigator.clipboard.writeText(copiado);
      feedback.textContent = 'copiado.';
    } catch {
      feedback.textContent = 'Cópia automática indisponível.';
    }
  });
})();
