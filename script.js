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

const categoryTitle = document.querySelector('.category-title');




document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const leftArrow = document.getElementById('left');
  const rightArrow = document.getElementById('right');
  const cardWidth = 400;
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

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });
});

