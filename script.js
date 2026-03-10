
//Selects the navigation bar so I can control it
const navbar = document.querySelector(".top-bar");
//creates a memory of where the scrollbar is currently sitting
let lastScrollY = window.scrollY;
//adds an event listener for any time the user scrols the page
window.addEventListener("scroll", () => {

    //if the current scroll position is greater than the last one, they are scrolling DOWN
    if (lastScrollY < window.scrollY) {
        //adds the hidden class to slide the bar back down
        navbar.classList.add("top-bar--hidden");
    }
    //if not, they must be scrolling up
    else {
        //Removes the hidden class to slide the bar back down
        navbar.classList.remove("top-bar--hidden");
    }

    //updates the memory with the new scroll position for the next time they scroll
    lastScrollY = window.scrollY;
});


