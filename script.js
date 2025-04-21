document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('.mobile-btn');
  const nav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Переключение меню
  mobileBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    mobileBtn.classList.toggle('active');
    mobileBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Закрытие меню после клика по ссылке
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      mobileBtn.classList.remove('active');
      mobileBtn.setAttribute('aria-expanded', 'false');
    });
  });
});
