(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-f222ba2e.js")
    );
  })().catch(console.error);

})();
