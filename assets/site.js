// Mobile menu toggle
document.querySelectorAll('[data-menu-toggle]').forEach(function (button) {
  button.addEventListener('click', function () {
    var menu = document.getElementById(button.getAttribute('aria-controls'));
    var isOpen = !menu.classList.toggle('hidden');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

// Keep the footer copyright year current
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
