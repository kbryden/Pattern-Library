
// to open nav
var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

//to close nav
var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
    console.log('close it!');
    document
      .querySelector('body')
      .classList
      .toggle('nav-open');
});

//to click nav elements
$("document").ready(function() {

  $( ".main-nav ul li" ).click(function(){
      console.log('clicky!!!');
    $( ".main-nav ul li div" ).toggleClass(".ul-info");
  });

});
