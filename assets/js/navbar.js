window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
  
    var scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  
    // Adjust this threshold as needed
    if (scrollPercentage >= 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  