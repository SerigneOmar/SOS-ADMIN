// Smooth scroll pour la navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    
    // Mise à jour de l'attribut aria-current
    document.querySelectorAll('nav a').forEach(a => a.removeAttribute('aria-current'));
    this.setAttribute('aria-current', 'page');
  });
});

// Mise à jour de la navigation active lors du défilement
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 60) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.removeAttribute('aria-current');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.setAttribute('aria-current', 'page');
    }
  });
});