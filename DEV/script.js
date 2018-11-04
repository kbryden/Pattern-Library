
var navButton = document.querySelector(".nav-icon");
var closeButton = document.querySelector(".close-icon");
var modalButton = document.querySelector('.btnsimplemodal');
var modalcloseButton = document.querySelector('.close-icon');

//http://jqueryui.com/datepicker/#icon-trigger
$("document").ready(function() {
    
$(function () {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "icons/calendar.png",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );

  $( function() {
    $( "#datepicker2" ).datepicker();
  } );


// to open nav
function toggleNav() {
  document
    .querySelector("body")
    .classList
    .toggle("nav-open");
};

//to close nav 
function toggleNavClose() {
    document
      .querySelector("body")
      .classList
      .remove("nav-open");
};

// to open modal
function toggleModal() {
  document
    .querySelector('body')
    .classList
    .toggle('simple-modal-open');
};

//to close modal
function toggleModalClose() {
    document
      .querySelector('body')
      .classList
      .remove('simple-modal-open');
};

    //written in JQuery
    
$(navButton).click(toggleNav);
$(closeButton).click(toggleNavClose);
$(modalButton).click(toggleModal);
$(modalcloseButton).click(toggleModalClose);
    
    //written in Vanilla JavaScript
//navButton.addEventListener("click", toggleNav); 
//closeButton.addEventListener("click", toggleNavClose);
//modalButton.addEventListener("click", toggleModal);
//modalcloseButton.addEventListener("click", toggleModalClose);
                                  

});




