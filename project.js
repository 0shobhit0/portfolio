window.addEventListener('DOMContentLoaded', function() {
    var textElement = document.getElementById('textElement');
    if (window.innerWidth <= 768) {
      textElement.classList.add('hidden-on-mobile');
    } else {
      textElement.classList.remove('hidden-on-mobile');
    }
    
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 768) {
        textElement.classList.add('hidden-on-mobile');
      } else {
        textElement.classList.remove('hidden-on-mobile');
      }
    });
  });
  