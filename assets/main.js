function byId(id){ return document.getElementById(id); }

document.addEventListener('DOMContentLoaded', () => {
  const burger = byId('burger');
  const mmenu = byId('mobileMenu');
  if(burger && mmenu){
    burger.addEventListener('click', () => mmenu.classList.toggle('open'));
  }

  // Simple active link highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith(path)) a.classList.add('active');
  });

  // Demo contact form handler
  const contactForm = byId('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const notice = byId('contactNotice');
      if(notice){
        notice.className = 'notice success';
        notice.textContent = 'Thanks! Your message has been sent. We will get back to you shortly.';
      }
      contactForm.reset();
    });
  }
});