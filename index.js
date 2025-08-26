import waitFor from '/src/utils/waitFor';

waitFor(() => window?.LESCH?.isReady || false, 10)
  .then(() => {
    LESCH.ComponentRenderer.renderRoot();
  });
