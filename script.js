// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 85,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// css progress circular bar 
let cssProgress = document.querySelector(".css"),
  cssValue = document.querySelector(".css-progress");

let cssStartValue = 0,
  cssEndValue = 80,
  cssspeed = 30;

let progresscss = setInterval(() => {
  cssStartValue++;

  cssValue.textContent = `${cssStartValue}%`;
  cssProgress.style.background = `conic-gradient(#20c997 ${
    cssStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (cssStartValue == cssEndValue) {
    clearInterval(progresscss);
  }
}, cssspeed);

// Java progress circular bar
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
  javaEndValue = 90,
  javaspeed = 30;

let progressjava = setInterval(() => {
  javaStartValue++;

  javaValue.textContent = `${javaStartValue}%`;
  javaProgress.style.background = `conic-gradient(#3f396d ${
    javaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javaStartValue == javaEndValue) {
    clearInterval(progressjava); // Stop the progress once it reaches the end value
  }
}, javaspeed);

// Python progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 80,
  pythonSpeed = 30;

let progressPython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#ff5722 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progressPython);
  }
}, pythonSpeed);

// C++ progress circular bar 
let cppProgress = document.querySelector(".cpp"),
  cppValue = document.querySelector(".cpp-progress");

let cppStartValue = 0,
  cppEndValue = 75,
  cppSpeed = 30;

let progressCpp = setInterval(() => {
  cppStartValue++;

  cppValue.textContent = `${cppStartValue}%`;
  cppProgress.style.background = `conic-gradient(#1976D2 ${cppStartValue * 3.6}deg, #ededed 0deg)`;

  if (cppStartValue == cppEndValue) {
    clearInterval(progressCpp);
  }
}, cppSpeed);

// C progress circular bar 
let cProgress = document.querySelector(".c"),
  cValue = document.querySelector(".c-progress");

let cStartValue = 0,
  cEndValue = 75,
  cSpeed = 30;

let progressC = setInterval(() => {
  cStartValue++;

  cValue.textContent = `${cStartValue}%`;
  cProgress.style.background = `conic-gradient(#009688 ${cStartValue * 3.6}deg, #ededed 0deg)`;

  if (cStartValue == cEndValue) {
    clearInterval(progressC);
  }
}, cSpeed);

// MySQL progress circular bar 
let mysqlProgress = document.querySelector(".mysql"),
  mysqlValue = document.querySelector(".mysql-progress");

let mysqlStartValue = 0,
  mysqlEndValue = 90,
  mysqlSpeed = 30;

let progressMySQL = setInterval(() => {
  mysqlStartValue++;

  mysqlValue.textContent = `${mysqlStartValue}%`;
  mysqlProgress.style.background = `conic-gradient(#673AB7 ${mysqlStartValue * 3.6}deg, #ededed 0deg)`;

  if (mysqlStartValue == mysqlEndValue) {
    clearInterval(progressMySQL);
  }
}, mysqlSpeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});