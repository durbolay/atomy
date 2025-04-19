document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('.mobile-btn');
  const nav = document.getElementById('main-nav');

  mobileBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    mobileBtn.classList.toggle('active');
    mobileBtn.setAttribute('aria-expanded', String(isOpen));
  });
});
