(function(){ 
    const sliders = [...document.querySelectorAll(".slider_body")]; 
    const arrowNext = document.querySelector("#next");
    const arrowBefore = document.querySelector("#before");
    let value;

    arrowNext.addEventListener("click", ()=> changePosition(1)); 

    arrowBefore.addEventListener("click", ()=> changePosition(-1));

    function changePosition(change){ 
        const currentElement = Number(document.querySelector(".slider_body--show").
        dataset.id);

        value = currentElement;
        value+= change;

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        } 

        sliders[currentElement-1].classList.toggle("slider_body--show");
        sliders[value-1].classList.toggle("slider_body--show");
    }



})()

/**/
const imagenes = document.querySelectorAll(".img-galeria") 
const imagenesLigth = document.querySelector('.agregar-imagen');
const contenedorLigth = document.querySelector('.imagen-ligth');
const hamburguer1 = document.querySelector('.hamburger');

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", () =>{
        aparecerImagen(imagen.getAttribute("src"))
    })
})

contenedorLigth.addEventListener("click", (e)=>{
    if(e.target !== imagenesLigth){
        contenedorLigth.classList.toggle("show")
        imagenesLigth.classList.toggle("showImage")
        hamburguer1.style.opacity = "1"
    }
})

const aparecerImagen = (imagen)=>{ // creamos una constante de tipo flecha con el parametro imagen
    imagenesLigth.src = imagen //quiero que imagen ligth que su atributo src sea igual a imagen
    contenedorLigth.classList.toggle("show") //cuando le doy click quiero agregarle y quitarle la clase show
    imagenesLigth.classList.toggle("showImage") //quiero que se agrege y se quite la clase show image
    hamburguer1.style.opacity = "0" // pero cuando alguien habra el ligbox quiero que su opacidad seade cero.
}