/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
 const mybutton = document.getElementById('myBtn');
const navBarMenu = document.getElementById("navbar__list"); // empty unordered list
const navBarMenuSections = [...document.querySelectorAll("section")]; // creates an array and add items to it for each section in the document
const listSections = document.querySelectorAll("section"); // section elements
/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav

const generateNavBar = () => {
    // function to add items to the nav bar list
    for (navBarMenuSection of navBarMenuSections) {
        navBarMenuSectionName = navBarMenuSection.getAttribute("data-nav");
        navBarMenuSectionLink = navBarMenuSection.getAttribute("id");
        navBarMenuListItem = document.createElement("li");
        navBarMenuListItem.innerHTML = `<a class='menu__link' href='#${navBarMenuSectionLink}'>${navBarMenuSectionName}</a>`;
        navBarMenu.appendChild(navBarMenuListItem);
    }
};

// Add class 'active' to section when near top of viewport

const sectionInViewport = (view) => {
    // determine if section is near top of viewport
    let sectionxy = view.getBoundingClientRect();
    return sectionxy.top <= 150 && sectionxy.bottom >= 150;
};

const addActiveClass = () => {
    // function to add active class to viewed section
    for (navBarMenuSection of navBarMenuSections) {
        if (sectionInViewport(navBarMenuSection)) {
            if (!navBarMenuSection.classList.contains("your-active-class")) {
                navBarMenuSection.classList.add("your-active-class");
            }
        } else {
            navBarMenuSection.classList.remove("your-active-class");
        }
    }
};

// Scroll smoothly to section on anchor click

const smoothScroll = () => {
    document.querySelectorAll(".menu__link").forEach((anchor) => {
        // selects all anchors with class='menu__link'
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};

// get a button to scroll back to top of the page
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
  }; 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  
/**
 * End Main Functions
 * Begin Events
 *
 */
 mybutton.addEventListener('click', topFunction);
// Build menu

generateNavBar();

// Scroll to section on link click

smoothScroll();

// Set sections as active

document.addEventListener("scroll", addActiveClass);

/* End of Code :) */
