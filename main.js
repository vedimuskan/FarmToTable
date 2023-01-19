

const nav = document.getElementById('list');

  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    };
window.onresize = function(){
    const list = document.getElementById('navLinks');
    if(screen.width>700){
        list.style = "display:block; transition:0.5s"

    }
    else{
      list.style = "display:none;"
      nav.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`;
    }
}

window.onload = function(){
    const list = document.getElementById('navLinks');
    if(screen.width<700){
        list.style = "display:none; "
    }
    typeWriter();
    let menuContainer = select('.menu-container');

    if (menuContainer) {

      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }
}

const displayNav = ()=>{
    const list = document.getElementById('navLinks');
    if(nav.innerHTML == "X" && screen.width<=700){
        list.style = "display:none; transition:0.5s ease";
        nav.innerHTML = `<i class="fa fa-bars" aria-hidden="true"></i>`;
    }
    else{
        list.style = "display:block; font-family: sans-serif; transition:0.5s ease"
        nav.innerHTML = `X`;
    }
}

nav.addEventListener('click',displayNav);

const bg = document.getElementById("body");
const paybtn = document.getElementById("btnpay");

const paynow = ()=>{
  img = document.getElementById('upi');
  img.style = "display: block;"
}

paybtn.addEventListener('click',paynow);

let i=0;
const txt = "Farm To Table";
const type = document.getElementById('typing');

function typeWriter() {
  if (i < txt.length) {
    type.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
