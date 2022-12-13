(function(){ 
    const sliders = [...document.querySelectorAll(".slider_body")]; //creamos una constante y le decimos que quiero obtener todos los elemtnos que contener la clase slider_body - le ponemos los 3 puntos para convertirlo en un array
    const arrowNext = document.querySelector("#next"); // obtenemos los iconos de las flechas (next)
    const arrowBefore = document.querySelector("#before"); // obtenemos los iconos de las flechas (before)
    let value; //creamos una variable value

    arrowNext.addEventListener("click", ()=> changePosition(1)); //decimos que cuando demos clic en el elemnto arrownext quiero que lame a una funcion que sera la funcion change position que tendra un valor de 1
    //cuando de click al elemnto arrownext quiero que se sume y cuando le de al arrowbefore quiero que se reste
    arrowBefore.addEventListener("click", ()=> changePosition(-1)); //Hacemos lo mismo pero esta vez con el valor -1

    function changePosition(change){ //si creo la funcion changepos y tomo el parametro y lo imprimo por consola cada que de click imprimara un uno
        const currentElement = Number(document.querySelector(".slider_body--show"). //obtenemos el elemnto slider_ porque nos indicara que esees el elemento actual
        dataset.id); //obtenemos el id

        value = currentElement; //value igual a current
        value+= change; // decimos que se le sume el paramatero change para que se vaya sumando o restando

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){ //ssi el valor es igual a 0 que se ejecute pero tambien si el valor es igual al numero de slaider +1 / es cero quiero volver al ultimo valor
            value = value === 0 ? sliders.length : 1; //ahora quiero que value cambie de valor , que si value es igual a 0, significa que quiero que su valor cambie y tenga el valor de los elemntos existentes pero si es diferente a 0 sig que estamos en el ultimo valor y queremos que vaya al primer elemnto
        } 

        sliders[currentElement-1].classList.toggle("slider_body--show"); //obtengo el elemnto actual pero como contamos desde 0 ponogo un menos 1
        sliders[value-1].classList.toggle("slider_body--show"); //pongo un -1 y tomo sus clases y agrego la clase con togle sliderbodyshow 
    }
    //codigo resumido
//primero obtenemos todos los slider // obtenemos el boton de siguiente y despues el de ir hacia atras //creamos una variable value // agregamos un evento a la imagen de siguiente e ir hacia atras, cada que de click a uno de esos elemntos llamo a la variable change position, si doy click en siguiente agrego un 1 y si le doy enir hacia atras le doy un -1
//luego en esta funcion obtengo el elemnto actual y obtengo su datasate id //slider lengt te devuelve el numero de elemntos //despues reasignamos el valor para valiu //posteriormente quitamos la clase sliderbodyshow  del elemnto actual y la agregamos al elemnto siguiente


})()

/**/
const imagenes = document.querySelectorAll(".img-galeria") //selecionamos todos los elemntos que tengan la clase img-galeria
const imagenesLigth = document.querySelector('.agregar-imagen');//tomamos la iamgen que vamos agregar en el ligbox
const contenedorLigth = document.querySelector('.imagen-ligth'); //selecionamos el contendor del ligbox
const hamburguer1 = document.querySelector('.hamburger'); //copiamos la constante de hambuger

imagenes.forEach(imagen =>{ // a imagenes le damos un foreach y que todos sus elemntos se llamen imagen y cada elemnto le agrego un evento
    imagen.addEventListener("click", () =>{ // de tipo click y cuando alguien le de click quiero que se dis
        aparecerImagen(imagen.getAttribute("src")) // cuando le doy click quiero que el lighbox tenga esa imagen
    })
})

contenedorLigth.addEventListener("click", (e)=>{ // quiero que cuando alguien le di click al contenedor ligth que practicamente es toda la pantalla quiero saber algo y para eso le pongo el parametro e
    if(e.target !== imagenesLigth){ //si e . target es diferente a imagenligth quiero que estas 2 clases que ejcute aqui se vuelvan a ejecutar
        contenedorLigth.classList.toggle("show")
        imagenesLigth.classList.toggle("showImage") //si doy clicka cualquier cosa menos a imagenslide se va cerrar el ligbox
        hamburguer1.style.opacity = "1"  // una vez declarada quiero que hamburger 1 cuando alguien quiera cerrar el lgbox quiero modificar su estilo de opacidad  quiero que sea de 1
    }
})

const aparecerImagen = (imagen)=>{ // creamos una constante de tipo flecha con el parametro imagen
    imagenesLigth.src = imagen //quiero que imagen ligth que su atributo src sea igual a imagen
    contenedorLigth.classList.toggle("show") //cuando le doy click quiero agregarle y quitarle la clase show
    imagenesLigth.classList.toggle("showImage") //quiero que se agrege y se quite la clase show image
    hamburguer1.style.opacity = "0" // pero cuando alguien habra el ligbox quiero que su opacidad seade cero.
}