var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
output.innerHTML = this.value;
}
var slideIndex = 0;
showSlides();

function showSlides() {
  //alert('dsads');
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
function openPage(pageName,elmnt,color,color1) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";

  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = color1;
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();

var element1 = document.getElementById("myDIV");
var element2 = document.getElementById("myDIV2");
var element3 = document.getElementById("myDIV3");

function myFunction() {
   
   element1.style.display="block";
    element2.style.display="none";
     element3.style.display="none";
   
}
function myFunction2() {

  element2.style.display="block";
    element1.style.display="none";
     element3.style.display="none";
   
}

function myFunction3() {
   
  element3.style.display="block";
    element2.style.display="none";
     element1.style.display="none";
   
}