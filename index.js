import waitFor from '/src/utils/waitFor.js';

waitFor(() => window?.LESCH?.isReady || false, 10)
  .then(() => {
    LESCH.ComponentRenderer.renderRoot();
  });
