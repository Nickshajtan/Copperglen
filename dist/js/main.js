'use strict';

const header   = document.getElementById("masthead");
const sections = document.querySelectorAll('section');

window.onscroll = function() {
  fixedMenu( header );
  if( window.innerWidth > 1200 ) {
    sectionAnimate();
  }
}


document.getElementById("nav-trigger").onclick = function() {
  openMenu( header );
};

function openMenu( header ) {
  try {
    if( !header ) {
      throw new Error(header + ' is not DOM element');
    }
    else {
      header.classList.toggle("show");
      document.querySelector("body").classList.toggle("menu-open");
    }
  }
  catch(e){
    console.log('Problem with burger menu js: ' + e);
  }
}

document.addEventListener("DOMContentLoaded", closeMenu);
function closeMenu() {
  try{
    if( !header ) {
      throw new Error(header + ' is not DOM element');
    }
    if( window.innerWidth <= 1200 ) {
          let links = header.querySelectorAll('a');
          if( links ) {
            for (let link of links) {
                link.addEventListener('click', function (e) {
                  header.classList.remove("show");
                  document.querySelector("body").classList.remove("menu-open");
                  document.getElementById("nav-trigger").checked = false;
                }); 
            }
          }
    }
  }
  catch(e){
    console.log('Problem with close burger menu js: ' + e);
  } 
}

function fixedMenu( element ) { 
  try {
    if( !element ) {
      throw new Error(element + ' is not DOM element');
    }
    if( element ) {
        if (window.scrollY > element.offsetTop + 150) {
          element.classList.add('fixed');
        }
        else{
          element.classList.remove('fixed');
        }
    }
  }
  catch(e){
    console.log('Problem with fixed menu js: ' + e);
  }
}

document.addEventListener("DOMContentLoaded", smoothLinks);
function smoothLinks(){
  try {
    const anchors = document.querySelectorAll('a.scroll-to');
    if( !anchors ) {
      throw new Error(anchors + ' is not DOM element');
    }
    else {
      for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()

          const blockID = anchor.getAttribute('href')

          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      }
    }
  }
  catch(e){
    console.log('Problem with smooth scrolling js: ' + e);
  }
}

function sectionAnimate() {
  try {
      if( !sections ) {
        throw new Error(sections + ' is not DOM element');
      }
      if( sections ) {
        let counter = 1;
        for (let section of sections) {
          if( counter > 1 ) {
            if (window.scrollY > section.offsetTop - 700) { 
              section.classList.add('animation'); 
            }
          }
          section.style.transition     = counter/2 + 's';
          section.style.animationDelay = counter/2 + 's';
          counter++;
        } 
     }
  }
  catch(e){
    console.log('Problem with section animate js: ' + e);
  }
}

document.addEventListener("DOMContentLoaded", googleClick);
function googleClick() {
  try{
    let btns = document.getElementsByClassName('btn-contact');
    if( btns ) {
      for (let btn of btns) {
        btn.onclick = function(e) {
          e.preventDefault();
          confirm('Your google form, for example');
          alert('sucess');
          window.location.href = window.location.href;
        }
      }
    }
    else {
      throw new Error(btns + ' is not DOM element');
    }
  }
  catch(e){
    console.log('Problem with Google form click js: ' + e);
  }
}
