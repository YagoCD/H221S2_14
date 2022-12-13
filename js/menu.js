
/*MODAL NOSOTROS*/
const open = document.getElementById('open'); //definimos una contastante, open=document.. obetener el elemnto por el id de open
const modal_container = document.getElementById('modal_container'); 

open.addEventListener('click', () => {  //porgramamos el evento click y llamamos a una funcion
  modal_container.classList.add('show');   // trabajmos con el elemnto modal container y su propiedad class list y le agregamos una clase show
});

close.addEventListener('click', () => {  //porgramamos el evento click y llamamos a una funcion
  modal_container.classList.remove('show'); //removemos la clase show
});

const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modal_container2.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});

const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modal_container3.classList.add('show');  
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});

const open4 = document.getElementById('open4');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modal_container4.classList.add('show');  
});

close4.addEventListener('click', () => {
  modal_container4.classList.remove('show');
});

/*Menu*/
const hamburguer = document.querySelector('.hamburger'); //creamos una contaste esto es igual a ... y esto toma la clase hamburguer
const menu = document.querySelector('.menu-navegacion'); // creamos ...... y selleciono el menu de navegacion / ponemos el , para sellecionar a la clase

console.log(menu) // 1 elemnto consol log para el menu
console.log(hamburguer) // 2 elemnto y otro para hamburger

hamburguer.addEventListener("click", ()=>{ //le agregamos un evento al elemnto amburguer de tipo click y quiero que cuando le den click se desate una funcion de flecha
    menu.classList.toggle("spread") //quiero que al menu selelcione las clases selecione o quite la clase spread
})

window.addEventListener("click",  e=>{ //quiero que cuando alguien toque la ventana dispare otra funcion de flcha 
  if(menu.classList.contains("spread") //si el menu .clas.. tiene la clase spreed quiero que se ejecute este codigo
      && e.target != menu && e.target != hamburguer    ){ //si menu tiene la clase spred y aparte el elemnto al que esta dandole clik es diferente al menu quier que se jecute , que al elemnto que le damos click e.target es diferente a hamburger (sino pongo esto el menu se cerrara al instante) 
      menu.classList.toggle("spread") //(lineas arriba) basicamnt para que esto se ejecute db dar clik a algo difrenete al menu o al icono de amburguer
      }
})