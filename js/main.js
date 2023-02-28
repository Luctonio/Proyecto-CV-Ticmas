const header = document.getElementById("header");
const menu = document.querySelector(".burguer");

const showMenu = () => {
header.classList.remove("none-mobile");
menu.classList.add("d-none");
}

const hideMenu = () => {
header.classList.add("none-mobile");
menu.classList.remove("d-none");
}

function bigImg(x) {
  x.style.height = "45px";
  x.style.width = "45px";
  x.style.transition = "all 0.5s"
}

function normalImg(x) {
  x.style.height = "40px";
  x.style.width = "40px";
}

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
  let Desplazamiento_Actual = window.pageYOffset;
  if(ubicacionPrincipal >= Desplazamiento_Actual){
    document.getElementById("header").style.top = "0" ;
  }
  else{
    document.getElementById("header").style.top = "-200px" ;
  }
  ubicacionPrincipal = Desplazamiento_Actual;
}