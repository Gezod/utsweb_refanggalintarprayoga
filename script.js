document.addEventListener("DOMContentLoaded", function() {
  
  const startSection = document.getElementById("startSection");
  const section01 = document.getElementById("section01");
  const section02 = document.getElementById("section02");
  const section03 = document.getElementById("section03");
  const endSection = document.getElementById("endSection");
  const section01Content = document.getElementById("section01Content");
  const section02Content = document.getElementById("section02Content");
  const section03Content = document.getElementById("section03Content");
  const section4endContent = document.getElementById("section4endContent")

  startSection.addEventListener("click", function() {
    smoothScroll(startSection);
  });

  section01.addEventListener("click", function() {
    smoothScroll(section01Content);
  });

  section02.addEventListener("click", function() {
    smoothScroll(section02Content);
  });

  section03.addEventListener("click", function() {
    smoothScroll(section03Content);
  });

  endSection.addEventListener("click", function() {
    smoothScroll(section4endContent);
  });  
  
  
  function smoothScroll(target) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust as needed
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});


const readMoreButton = document.getElementById("readMoreButton");
const readMore1 = document.querySelector(
  ".read-more-1"
);

readMore1.style.display = "none";

readMoreButton.addEventListener("click", () => {
  if (readMore1.style.display === "none") {
    readMore1.style.display = "block"; 
    readMoreButton.innerText = "Read Less"; 
  } else {
    readMore1.style.display = "none"; 
    readMoreButton.innerText = "Read More";
  }
});

const readMoreButton2 = document.getElementById("readMoreButton2");
const readMore_2 = document.querySelector(
  ".readMore2"
);


readMore_2.style.display = "none";

readMoreButton2.addEventListener("click", () => {
  if (readMore_2.style.display === "none") {
    readMore_2.style.display = "block"; 
    readMoreButton2.innerText = "Read Less"; 
  } else {
    readMore_2.style.display = "none"; 
    readMoreButton2.innerText = "Read More"; 
  }
});

const readMoreButton3 = document.getElementById("readMoreButton3");
const readMore_3 = document.querySelector(
  ".readMore3"
);


readMore_3.style.display = "none";

readMoreButton3.addEventListener("click", () => {
  if (readMore_3.style.display === "none") {
    readMore_3.style.display = "block"; 
    readMoreButton3.innerText = "Read Less"; 
  } else {
    readMore_3.style.display = "none"; 
    readMoreButton3.innerText = "Read More"; 
  }
});

var modal = document.getElementById("myModal1");

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("myModal2");

var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close2")[0];

span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("myModal3");

var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close3")[0];

span.onclick = function() {
  modal.style.display = "none";
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}