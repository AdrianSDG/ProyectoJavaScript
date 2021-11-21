console.log("Bienvenido a tu entrenador virtual");
//////////////////////////////////////////////////////ARRAYS
const arrayCoach = [{coach: "Marcel", tarifa: 2000, estilo:"HIT y pesas", nivel: 3},
{ coach: "Samantha", tarifa: 1200, estilo:"HIT", nivel: 1},
{ coach: "Brandon", tarifa: 1500, estilo:"HIT y pesas", nivel: 1},
{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas", nivel: 2},
{ coach: "Robert", tarifa: 1600, estilo:"HIT", nivel: 2},
{ coach: "Max", tarifa: 1900, estilo:"funcional y pesas", nivel: 1},
{ coach: "Michelle", tarifa: 1300, estilo:"pesas", nivel: 1},
{ coach: "Pedro", tarifa: 1300, estilo:"pesas", nivel: 2},
{ coach: "Gabriel", tarifa: 1600, estilo:"HIT y pesas", nivel: 2},
{coach: "Santi", tarifa: 2500, estilo:"pesas", nivel: 3}];
console.table(arrayCoach);

const coachNuno =[{ coach: "Samantha", tarifa: 1200, estilo:"HIT", nivel: 1},
{ coach: "Brandon", tarifa: 1500, estilo:"HIT y pesas", nivel: 1},
{ coach: "Max", tarifa: 1900, estilo:"funcional y pesas", nivel: 1},
{ coach: "Michelle", tarifa: 1300, estilo:"pesas", nivel: 1}];

const coachNdos = [{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas", nivel: 2},
{ coach: "Robert", tarifa: 1600, estilo:"HIT", nivel: 2},
{ coach: "Pedro", tarifa: 1300, estilo:"pesas", nivel: 2},
{ coach: "Gabriel", tarifa: 1600, estilo:"HIT y pesas", nivel: 2}];

const coachNtres = [{coach: "Marcel", tarifa: 2000, estilo:"HIT y pesas", nivel: 3},
{coach: "Santi", tarifa: 2500, estilo:"pesas", nivel: 3},]


let botonUno = document.getElementById("nivelUno")
botonUno.addEventListener ("click", respbotUno)
function respbotUno(){
    for (const trainer of coachNuno){
        let seleccion = document.createElement("div");
        seleccion.setAttribute("class", "bU");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p>--Tarifa: ${trainer.tarifa}</p>
<p>--Estilo: ${trainer.estilo}</p>
<p>--Nivel: ${trainer.nivel}</p>`;
document.body.appendChild(seleccion);
}}

let botonDos = document.getElementById("nivelDos")
botonDos.addEventListener("click", respbotDos)
function respbotDos(){
    for (const trainer of coachNdos){
        let seleccion = document.createElement("div");
        seleccion.setAttribute("class", "bD");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p>--Tarifa: ${trainer.tarifa}</p>
<p>--Estilo: ${trainer.estilo}</p>
<p>--Nivel: ${trainer.nivel}</p>`;
document.body.appendChild(seleccion);
}}

let botonTres = document.getElementById("nivelTres")
botonTres.addEventListener("click", respbotTres)
function respbotTres(){
    for (const trainer of coachNtres){
        let seleccion = document.createElement("div");
        seleccion.setAttribute("class", "bT");
seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
<p>--Tarifa: ${trainer.tarifa}</p>
<p>--Estilo: ${trainer.estilo}</p>
<p>--Nivel: ${trainer.nivel}</p>`;
document.body.appendChild(seleccion);
}}

//////////////////////////////////////////////////////INGRESO DE ALUMNO
let botonAlum = document.getElementById("ingAlum")
botonAlum.addEventListener("click",ingDatos)
function ingDatos(){ nombre = prompt("Hola,¿Como te llamas?");
edad = parseFloat(prompt("Dime tu edad"));
sexo = prompt(" Dime tu sexo");
objetivo = prompt("Muy brevemente, ¿Que buscas?");
tiempo = parseFloat(prompt("¡Cuantos meses deseas entrenar?"));
function Alumno(nombre, edad, sexo, objetivo, tiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.objetivo = objetivo;
    this.tiempo = tiempo;
    this.trainer = function(){
        if(tiempo <= 5){
            alert("Te recomendamos como tutor al grupo de nivel 1")
        }else if(tiempo >= 6 && tiempo <= 12){
            alert("Te recomendamos como tutor al grupo de nivel 2")
        }else if(tiempo > 12){
            alert("Te recomendamos como tutor al grupo de nivel 2 o 3")
        }
    }

}
const alumno1 = new Alumno(nombre, edad, sexo, objetivo, tiempo,);

alumno1.trainer();
console.log(alumno1);
const alumJson = JSON.stringify(alumno1);
localStorage.setItem("alumno1", alumJson);}

//////////////////////////////////////////////////////FUNCIONES ENTRENAMIENTO
let kilaje = 0;
function entrenador(){
    let dato1 = parseFloat (prompt("Indica el kilaje total que usas por repeticion para pecho"));
    let dato2 = parseFloat (prompt("Bien, ahora dime el kilaje total que usas en las repeticiones de epalda"));
    let dato3 = parseFloat (prompt("Ahora indica el kilaje total en piernas"));
    let dato4 = parseFloat (prompt("Indica las repeticiones de esas rutinas en la semana"));
    //realizo los calculos
    kilaje = (dato1 + dato2 + dato3) * dato4;
    if (kilaje < 100){
        alert("Manten una semana y aumenta el peso de " + kilaje + " kg unos 50kg")
    }else if(kilaje >= 100 && kilaje <= 200){
        let seleccion = document.createElement("div");
        alert("Los "+ kilaje + " kg estan bien, manten el peso pero aumenta las repeticiones en la semana")
    }else if( kilaje > 200){
        alert("Tu peso de "+ kilaje +" kg ya es suficiente por ahora, coordinemos para nuevos ejercicios")
    } 
}
let consumir = 0;
function hidratacion(){
    let liquido = parseFloat(prompt("¿Cuanta agua consumes, en litros,  mientras entrenas?"));
    let frecLiq = parseFloat(prompt("¿Cuantas veces repites esa cantidad en la semana?"));
    consumir = liquido * frecLiq;
    if(consumir < 10){
        alert("Los "+ consumir +" Litros que ingieres son escasos, trata de llevarlos a 10 (2 por dia)");
    }else if(consumir == 10){
        alert("Tu consumo de "+ consumir +" Litros es bueno, mantenlo");
    }else if(consumir > 10){
        alert("El consumo de "+ consumir +" Litros´en la semana no es malo en si, pero llevandolo a un promedio de 2L por dia ya esta bien ");
    }
}

function recuperacion(){
    let diasPesas = parseFloat(prompt("¿Cuantos dias ejercitas con pesas"));
    let diasCardio = parseFloat(prompt("¿Y de cardio?"));
    if(diasPesas < diasCardio){
        alert("Te recomiendo descansar dos dias en principio");
    }else if(diasPesas > diasCardio){
        alert("Con tres dias de descanso el cuerpo respondera bien");
    }else if(diasPesas == diasCardio){
        alert("En ese equilibrio te recomiendo un descanso activo");
    }
}

let botonEntren = document.getElementById("entrenador")
botonEntren.addEventListener("click", entrenador)

let botonHidra = document.getElementById("hidra")
botonHidra.addEventListener("click", hidratacion)

let botonRecup = document.getElementById("recup")
botonRecup.addEventListener("click", recuperacion)
//////////////////////////////////////////////////////IMAGENES

let caraG = document.getElementById("gokumirando")
caraG.addEventListener("mouseenter", gokuApr);
caraG.addEventListener("mouseout", gokuMir);

function gokuApr(){
    caraG.setAttribute("src","./img/goku dedo.jpg");
}
function gokuMir(){
    caraG.setAttribute("src","./img/goku mirando.jpg");
}

//////////////////////////////////////////////////////FORMULARIO(no funciona correctamente)
/*let miForm = document .getElementById ("contacto");
miForm.addEventListener ("submit", validarForm);
function validarForm(evt){
evt.preventDefault ();
let formulario = evt.target;
    let select = document.createElement("div");
    select.innerHTML = `<p> ${formulario.nombre.value}</p>;
    <p> ${formulario.apellido.value}</p>;
    <p> ${formulario.email.value}</p>;
    <p> ${formulario.grupo.value}</p>`;
    document.body.appendChild(select);}*/

