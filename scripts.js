// ======== Elements Appear as user scrolls ========

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with .hobby or .project class
  const elements = document.querySelectorAll(".hobby, .project");

  // Create IntersectionObserver to animate elements when they enter viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add animation class
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.2 // 20% visible before animation triggers
  });

  // Observe each element
  elements.forEach(el => observer.observe(el));
});

// ======== Lightbox for img view ========

document.addEventListener("DOMContentLoaded", () => {
  // Get lightbox elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".lightbox .close");
  const prevBtn = document.querySelector(".lightbox .prev");
  const nextBtn = document.querySelector(".lightbox .next");

  let currentIndex = 0;
  let currentImages = []; // Only images of the clicked gallery

  // Show image in lightbox by index
  function showImage(index) {
    const img = currentImages[index];

    // Ensure the image is fully loaded before displaying it
    const tempImg = new Image();
    tempImg.src = img.src;
    tempImg.onload = () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;

      // Set caption from data-caption or alt attribute
      const captionText = img.getAttribute("data-caption") || img.alt || "";
      lightboxCaption.textContent = captionText;

      currentIndex = index;

      // Focus the lightbox for keyboard navigation
      lightbox.focus();
    };
  }

  // Attach click and keyboard handlers to each image
  document.querySelectorAll(".project.img img, .hobby.img img").forEach((img) => {
    img.addEventListener("click", () => {
      // Find all images in the same gallery (parent container)
      const gallery = img.closest(".project.img, .hobby.img");
      currentImages = Array.from(gallery.querySelectorAll("img")); // Get all images in the same gallery
      const index = currentImages.indexOf(img); // Get the index of the clicked image
      showImage(index);
    });

    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        // Find all images in the same gallery (parent container)
        const gallery = img.closest(".project.img, .hobby.img");
        currentImages = Array.from(gallery.querySelectorAll("img")); // Get all images in the same gallery
        const index = currentImages.indexOf(img); // Get the index of the focused image
        showImage(index);
      }
    });
  });

  // Close button handler
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Prev/Next button handlers
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage(currentIndex);
  });
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage(currentIndex);
  });

  // Close lightbox when clicking on background
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return; // Only active when lightbox is open
    if (e.key === "Escape") lightbox.style.display = "none";
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
  });

  // Mobile swipe support
  let startX = 0;
  let endX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
  });

  lightbox.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  // Handle swipe gesture for prev/next
  function handleSwipe() {
    let diff = endX - startX;

    if (Math.abs(diff) > 50) { // Swipe threshold
      if (diff > 0) {
        // Swipe right → previous image
        prevBtn.click();
      } else {
        // Swipe left → next image
        nextBtn.click();
      }
    }
  }
});

// ======== Day / Night Mode switch ========

// Get theme switch checkbox and root element
const checkbox = document.getElementById('theme-checkbox');
const root = document.documentElement;
const label = document.querySelector('label[for="theme-checkbox"]');

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
}

// Toggle theme on checkbox change
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Add keyboard accessibility for the toggle
label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkbox.checked = !checkbox.checked; // Toggle the checkbox state
        checkbox.dispatchEvent(new Event('change')); // Trigger the change event
    }
});

