document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.getElementById("productsGrid");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");

  const products = [...sliderWrapper.children]; // Convert NodeList to Array
  const productWidth = products[0].offsetWidth + 20; // Product width including margin
  const visibleProducts = 4; // Number of products visible at a time

  // Duplicate first and last few items for infinite looping
  for (let i = 0; i < visibleProducts; i++) {
      let cloneFirst = products[i].cloneNode(true);
      let cloneLast = products[products.length - 1 - i].cloneNode(true);
      sliderWrapper.appendChild(cloneFirst);
      sliderWrapper.insertBefore(cloneLast, sliderWrapper.firstChild);
  }

  let scrollAmount = productWidth * visibleProducts;
  sliderWrapper.style.transform = `translateX(-${scrollAmount}px)`; // Initial positioning

  function slide(direction) {
      if (direction === "next") {
          scrollAmount += productWidth;
      } else {
          scrollAmount -= productWidth;
      }

      sliderWrapper.style.transition = "transform 0.5s ease-in-out";
      sliderWrapper.style.transform = `translateX(-${scrollAmount}px)`;

      // Reset position when reaching cloned items (infinite loop effect)
      setTimeout(() => {
          if (scrollAmount >= productWidth * (products.length + visibleProducts)) {
              sliderWrapper.style.transition = "none";
              scrollAmount = productWidth * visibleProducts;
              sliderWrapper.style.transform = `translateX(-${scrollAmount}px)`;
          } else if (scrollAmount <= 0) {
              sliderWrapper.style.transition = "none";
              scrollAmount = productWidth * products.length;
              sliderWrapper.style.transform = `translateX(-${scrollAmount}px)`;
          }
      }, 500);
  }

  nextButton.addEventListener("click", () => slide("next"));
  prevButton.addEventListener("click", () => slide("prev"));
});






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
