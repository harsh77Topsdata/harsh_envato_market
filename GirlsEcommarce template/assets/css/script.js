
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,
  speed: 4000,          // speed of scrolling
  freeMode: true,
  freeModeMomentum: false,
  autoplay: {
    delay: 0,           // continuous scroll
    disableOnInteraction: false,
  },
  loopedSlides: 5,      // number of slides to loop
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 18 }
  }
});

// Select buttons and products
const categoryButtons = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product-card");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedCategory = btn.getAttribute("data-category");

    products.forEach(product => {
      // Show product if "all" or category matches
      if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    // Optional: Highlight active button
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});




