/* Mobile Navigation */

/*   var open= document.getElementById("open");
  var close= document.getElementById("close"); */

var openclose = document.getElementById("open-close");
var mobile_navigation = document.getElementById("mobile_navigation");
var iconBars = document.querySelector(".fa-bars");
var iconTimes = document.querySelector(".fa-times");

function closeNavbar() {
    mobile_navigation.classList.remove('active');
    iconBars.style.display = "inline-block";
    iconTimes.style.display = "none";
}

openclose.addEventListener('click', () => {
    mobile_navigation.classList.toggle('active');

    if (mobile_navigation.classList.contains('active')) {
        iconBars.style.display = "none";
        iconTimes.style.display = "inline-block";
    } else {
        iconBars.style.display = "inline-block";
        iconTimes.style.display = "none";
    }
});

// Add click event listener to the document body
document.body.addEventListener('click', (event) => {
    const target = event.target;
    const isOpenCloseClicked = target === openclose || openclose.contains(target);
    const isMobileNavClicked = target === mobile_navigation || mobile_navigation.contains(target);

    if (!isOpenCloseClicked) {
        if (!isMobileNavClicked) {
            closeNavbar();
        } else if (target.tagName === 'A' || target.tagName === 'BUTTON') {
            // If a link or button inside the navigation is clicked, close the navigation
            closeNavbar();
        }
    }
});


/* Download button */


var downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function() {
    var fileURL = "resources/cv.docx";

    // Create an anchor element and set its attributes
    var link = document.createElement("a");
    link.href = fileURL;
    link.target = "_blank"; // Open the link in a new tab (optional)

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document body (optional)
    document.body.removeChild(link);
});


/* Crousel */

const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});
