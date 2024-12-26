const videoBg1 = document.getElementById('video-bg1');
const video1 = document.getElementById('video1');
const videoBg2 = document.getElementById('video-bg2');
const video2 = document.getElementById('video2');
const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

video2.pause();

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled >= pageHeight / 2) {
        videoBg1.classList.remove('active');
        video1.pause();
        videoBg2.classList.add('active');
        video2.play();
    } else {
        videoBg2.classList.remove('active');
        video2.pause();
        videoBg1.classList.add('active');
        video1.play();
    }
});


 

  
  let lastScrollTop = 0;

  // Function to detect scroll direction
  window.addEventListener("scroll", function() {
      let cards = document.querySelectorAll(".card");
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
          // Scrolling Down
          cards.forEach(card => {
              let cardPosition = card.getBoundingClientRect().top;
              if (cardPosition < window.innerHeight) {
                  card.classList.add("visible");
              }
          });
      } else {
          // Scrolling Up
          cards.forEach(card => {
              let cardPosition = card.getBoundingClientRect().top;
              if (cardPosition > window.innerHeight) {
                  card.classList.remove("visible");
              }
          });
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
  });


