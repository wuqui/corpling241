// Excalidraw extension for Reveal.js
// Enables drawing and annotation capabilities

(function() {
  'use strict';

  // Load Excalidraw script
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/@excalidraw/excalidraw@0.17.1/dist/excalidraw.production.min.js';
  document.head.appendChild(script);

  // Load Excalidraw CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/@excalidraw/excalidraw@0.17.1/dist/excalidraw.min.css';
  document.head.appendChild(link);

  // Initialize Excalidraw when script loads
  script.onload = function() {
    // Excalidraw will be available globally
    console.log('Excalidraw loaded successfully');
  };

})();