(() => {
  'use strict';

  const copyButton = document.getElementById('copy-link');
  const status = document.getElementById('share-status');
  const fallback = document.getElementById('copy-fallback');
  const address = document.getElementById('share-url');
  if (!copyButton || !status || !fallback || !address) return;

  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    status.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(address.value);
      fallback.hidden = true;
      status.textContent = 'Website link copied. Ready to share!';
    } catch {
      fallback.hidden = false;
      status.textContent = 'Copy the selected website address below.';
      address.focus();
      address.select();
    }
  });
})();
