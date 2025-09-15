document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hobby, .project");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.2 // 20% visible before animation triggers
  });

  elements.forEach(el => observer.observe(el));
});




document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");
  const prevBtn = document.querySelector(".lightbox .prev");
  const nextBtn = document.querySelector(".lightbox .next");

  let currentIndex = 0;
  let currentImages = []; // 👈 only images of the clicked section

  function showImage(index) {
    lightbox.style.display = "flex";
    lightboxImg.src = currentImages[index].src;

    const captionText = currentImages[index].getAttribute("data-caption") 
                    || currentImages[index].alt 
                    || "";
    document.getElementById("lightbox-caption").textContent = captionText;

    currentIndex = index;
  }

  // Attach click handler to each section
  document.querySelectorAll(".hobby.img").forEach(section => {
    const imgs = section.querySelectorAll("img");
    imgs.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentImages = Array.from(imgs); // 👈 only this section’s images
        showImage(index);
      });
    });
  });

  // Close button
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Prev/Next buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage(currentIndex);
  });
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage(currentIndex);
  });

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return; // only active when lightbox is open
    if (e.key === "Escape") lightbox.style.display = "none";
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
  });

  // 👉 Mobile swipe support
  let startX = 0;
  let endX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
  });

  lightbox.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    let diff = endX - startX;

    if (Math.abs(diff) > 50) { // threshold
      if (diff > 0) {
        // swipe right → previous
        prevBtn.click();
      } else {
        // swipe left → next
        nextBtn.click();
      }
    }
  }
});



const checkbox = document.getElementById('theme-checkbox');
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
}

// Toggle theme
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});