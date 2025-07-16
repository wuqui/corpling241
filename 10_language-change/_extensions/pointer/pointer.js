// Pointer extension for Reveal.js
// Adds a pointer/cursor that follows mouse movement

(function() {
  'use strict';

  // Create pointer element
  var pointer = document.createElement('div');
  pointer.id = 'pointer';
  pointer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: rgba(255, 0, 0, 0.8);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(pointer);

  // Track mouse movement
  document.addEventListener('mousemove', function(e) {
    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
  });

  // Hide pointer when mouse leaves window
  document.addEventListener('mouseleave', function() {
    pointer.style.opacity = '0';
  });

  // Show pointer when mouse enters window
  document.addEventListener('mouseenter', function() {
    pointer.style.opacity = '1';
  });

})();