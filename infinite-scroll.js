
document.addEventListener("DOMContentLoaded", function() {
  const scrollContainer = document.querySelector(".scrollimg");


  scrollContainer.innerHTML += scrollContainer.innerHTML;

  function smoothScroll() {

    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {

      scrollContainer.scrollLeft = 0;
    } else {

      scrollContainer.scrollLeft += 1; 
    }
  }


  setInterval(smoothScroll, 60);
});