console.log("Bienvenido a tu entrenador virtual");

const arrayCoach = [{coach: "Marcel", tarifa: 2000, estilo:"HIT y pesas", nivel: 3},
{ coach: "Samantha", tarifa: 1200, estilo:"HIT", nivel: 1},
{ coach: "Brandon", tarifa: 1500, estilo:"HIT y pesas", nivel: 1},
{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas", nivel: 2},
{ coach: "Robert", tarifa: 1600, estilo:"HIT", nivel: 2},
{ coach: "Max", tarifa: 1900, estilo:"funcional y pesas", nivel: 1},
{ coach: "Michelle", tarifa: 1300, estilo:"pesas", nivel: 1},
{ coach: "Pedro", tarifa: 1300, estilo:"pesas", nivel: 2},
{ coach: "Gabriel", tarifa: 1600, estilo:"HIT y pesas", nivel: 2}];
console.table(arrayCoach);

console.log("Grilla por nivel");
arrayCoach.sort(function(a, b){return a.nivel - b.nivel});
//arrayCoach.sort(function(a, b){return b.nivel - a.nivel});
console.table(arrayCoach);

console.log("Grilla por tarifa");
arrayCoach.sort(function(a,b){return a.tarifa - b.tarifa});
//alumn.sort(function(a,b){return b.tarifa - a.tarifa});
console.table(arrayCoach);

console.log("Filtrar por estilo");
const buscHit = arrayCoach.filter(tutor => tutor.estilo === "HIT");
console.log(buscHit);

const buschitPe = arrayCoach.filter(tutor => tutor.estilo === "HIT y pesas");
console.log(buschitPe);

const buscFunyp = arrayCoach.filter(tutor => tutor.estilo === "funcional y pesas");
console.log(buscFunyp);

const buscPes = arrayCoach.filter(tutor => tutor.estilo === "pesas");
console.log(buscPes);

////////////////////////////////////////////////////////////////////////////////////

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
nombre = prompt("Hola,¿Como te llamas?");
edad = parseFloat(prompt("Dime tu edad"));
sexo = prompt(" Dime tu sexo");
objetivo = prompt("Muy brevemente, ¿Que buscas?");
tiempo = parseFloat(prompt("¡Cuantos meses deseas entrenar?"));
  

const alumno1 = new Alumno(nombre, edad, sexo, objetivo, tiempo,);

alumno1.trainer();
console.log(alumno1);

//Funciones para entrenar
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
    if(diasPesas > diasCardio){
        alert("Te recomiendo descansar dos dias en principio");
    }else if(diasPesas < diasCardio){
        alert("Con tres dias de descanso el cuerpo respondera bien");
    }else if(diasPesas == diasCardio){
        alert("En ese equilibrio te recomiendo un descanso activo");
    }
}
entrenador();
hidratacion();
recuperacion();