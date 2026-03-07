document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarLinks = document.querySelector('.navbar__links');

  if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('navbar__links--open');
      // Opcional: Altera o ícone do hambúrguer para um 'X' quando aberto
      const icon = navbarToggle.querySelector('i');
      if (navbarLinks.classList.contains('navbar__links--open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Opcional: Fecha o menu ao clicar em um link (para navegação suave)
    navbarLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarLinks.classList.remove('navbar__links--open');
        const icon = navbarToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      });
    });
  }
});