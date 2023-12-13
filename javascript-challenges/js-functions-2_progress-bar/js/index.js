console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll", newProgressBarWidth);

function calculateScrollPercentage() {
  // document.body.clientHeight = height of webpage for example 100px
  const webpageHeight = document.body.clientHeight;
  // window.innerHeight = height of the viewport currently shown eg 25px
  const windowHeight = window.innerHeight;
  // window.scrollY = number where the currennt viewport is eg 50px
  const scrollYPosition = window.scrollY;
  // so window is currently from 50px-75px
  // calculatting percentage = scrolled position 50px / (webpage height 100px - winddowhight 25px) * 100 (for %)

  const currentlyScrolled = scrollYPosition / (webpageHeight - windowHeight);
  const currentScrolledPercentage = Math.round(currentlyScrolled * 100);

  return `${currentScrolledPercentage}%`;
}

function newProgressBarWidth() {
  const progressPercentage = calculateScrollPercentage();
  progressBar.style.width = progressPercentage;
}

newProgressBarWidth();
