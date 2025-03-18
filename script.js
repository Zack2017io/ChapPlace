document.addEventListener('DOMContentLoaded', function () {
  const inputElement = document.getElementById('search-input');
  const parentElement = document.querySelector('.input-wrapper');
  const searchList = document.querySelector('.search-list');

  // Ensure all elements exist
  if (!inputElement || !parentElement || !searchList) {
    console.error("One or more elements not found.");
    if (!inputElement) console.log("search-input not found");
    if (!parentElement) console.log("input-wrapper not found");
    if (!searchList) console.log("search-list not found");
    return;
  }

  // Toggle dropdown on clicking the parent wrapper
  parentElement.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event from reaching window.onclick
    searchList.classList.toggle('show');
    console.log("Dropdown toggled. Current state:", searchList.classList.contains('show'));
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (event) {
    if (!parentElement.contains(event.target) && searchList.classList.contains('show')) {
      searchList.classList.remove('show');
      console.log("Dropdown closed.");
    }
  });

  // Prevent dropdown from closing when clicking inside search list
  searchList.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  console.log("Dropdown script initialized successfully.");
});
//document.querySelectorAll('.card')[6].style.width = '300px'; // Third card

const categoryTitle = document.querySelector('.category-title');

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove and re-add animation classes for continuous play
        entry.target.classList.add("slideInLeft", "slideInRight", "slideIn");

        // Force reflow to restart animation
        void entry.target.offsetWidth;

        // Add animations based on data attributes or class
        if (entry.target.classList.contains("left")) {
          entry.target.classList.add("slideInLeft");
        } else if (entry.target.classList.contains("right")) {
          entry.target.classList.add("slideInRight");
        } else {
          entry.target.classList.add("slideIn");
        }
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% of the section is in view
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const leftArrow = document.getElementById('left');
  const rightArrow = document.getElementById('right');
  const cardWidth = 350;
  let scrollAmount = 0;
  
 

  rightArrow.addEventListener('click', function() {
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += cardWidth;
    }
    carousel.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  leftArrow.addEventListener('click', function() {
    if (scrollAmount <= 0) {
      scrollAmount = carousel.scrollWidth - carousel.clientWidth;
    } else {
      scrollAmount -= cardWidth;
    }
    carousel.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});



