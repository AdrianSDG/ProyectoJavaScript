console.log("Entrenador Virtual(Entrega Final)");
//////////////////////////////////////////////////////INGRESO DE ALUMNO
let inpNombre = document.getElementById("nombreAl");
let inpEdad = document.getElementById("edadAl");
let  inpObj = document.getElementById("objetivoAl");
let inpMeses = document.getElementById("mesesAl");
let inpGener = document.getElementById("generoAl");

let botonAlum = document.getElementById("ingAlum")
botonAlum.addEventListener("click",ingDatos)
function ingDatos(){nombre = inpNombre.value;
edad = inpEdad.value;
sexo = inpGener.value;
objetivo = inpObj.value;
tiempo = inpMeses.value;
function Alumno(nombre, edad, sexo, objetivo, tiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.objetivo = objetivo;
    this.tiempo = tiempo;
    this.trainer = function(){
        if(tiempo <= 5 && tiempo != 0){
            alert(`Te recomendamos como tutor al grupo de nivel 1`);
        }else if(tiempo >= 6 && tiempo <= 12){
            alert(`Te recomendamos como tutor al grupo de nivel 2`);
        }else if(tiempo > 12){
            alert(`Te recomendamos como tutor al grupo de nivel 2 o 3`);
        }
    }

}
const alumno1 = new Alumno(nombre, edad,sexo, objetivo, tiempo);

alumno1.trainer();
console.log(alumno1);
const alumJson = JSON.stringify(alumno1);
localStorage.setItem("alumno1", alumJson);}
const alumnoUno = JSON.parse(localStorage.getItem("alumno1"));
console.log(alumnoUno);

//////////////////////////////////////////////////////ANIMACIONES
$('#divAnimH').mouseenter(function(){
    $('#divAnimH').animate({
        opacity: "0.7"})
        $('#divAnimH').css({
            "background-color":"yellow", "border": "5px solid black"})
            $('#pAnimHT').animate({
                opacity: "0"})
                $("#pAnimHtext").css({
                    "color": "red"})
                    $("#pAnimHtext").animate({
                        opacity: "1"
                    })
})

$('#divAnimH').mouseout(function(){
    $('#divAnimH').animate({
        opacity: "1"})
        $('#divAnimH').css({
            "background-color":"goldenrod", "border": "2px solid black"})
            $('#pAnimHT').animate({
                opacity: "1"})
                $("#pAnimHtext").css({
                    "color" :"goldenrod"})
                    $("#pAnimHtext").animate({
                        opacity: "0"
                })
})
////////////////////////////////
$('#divAnimF').mouseenter(function(){
    $('#divAnimF').animate({
        opacity: "0.7"})
        $('#divAnimF').css({
            "background-color":"yellow", "border": "5px solid black"})
            $('#pAnimFT').animate({
                opacity: "0"})
                $("#pAnimFtext").css({
                    "color": "red"})
                    $("#pAnimFtext").animate({
                        opacity: "1"
                    })
})

$('#divAnimF').mouseout(function(){
    $('#divAnimF').animate({
        opacity: "1"})
        $('#divAnimF').css({
            "background-color":"goldenrod", "border": "2px solid black"})
            $('#pAnimFT').animate({
                opacity: "1"})
                $("#pAnimFtext").css({
                    "color" :"goldenrod"})
                    $("#pAnimFtext").animate({
                        opacity: "0"
                })
})
////////////////////////////////
$('#divAnimP').mouseenter(function(){
    $('#divAnimP').animate({
        opacity: "0.7"})
        $('#divAnimP').css({
            "background-color":"yellow", "border": "5px solid black"})
            $('#pAnimPT').animate({
                opacity: "0"})
                $("#pAnimPtext").css({
                    "color": "red"})
                    $("#pAnimPtext").animate({
                        opacity: "1"
                    })
})

$('#divAnimP').mouseout(function(){
    $('#divAnimP').animate({
        opacity: "1"})
        $('#divAnimP').css({
            "background-color":"goldenrod", "border": "2px solid black"})
            $('#pAnimPT').animate({
                opacity: "1"})
                $("#pAnimPtext").css({
                    "color" :"goldenrod"})
                    $("#pAnimPtext").animate({
                        opacity: "0"
                })
})

//////////////////////////////////////////////////////NIVEL TUTOR--ARRAYS
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

let resultNivel = document.getElementById("nivelTutor");
resultNivel.addEventListener("click", respbotNivel);

function respbotNivel () {
    let valor = document.getElementById("inputNivel").value;

    const tutorPorNivel = arrayCoach.filter((tutor) => tutor.nivel === +valor);

    for(const trainer of tutorPorNivel) {
        let seleccion = document.createElement("div");
        seleccion.setAttribute("class", "bU");
        seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
            <p>--Tarifa: ${trainer.tarifa}</p>
            <p>--Estilo: ${trainer.estilo}</p>
            <p>--Nivel: ${trainer.nivel}</p>`;
        document.body.appendChild(seleccion);
            }
    }

    let kilaje = 0;
    let entrena = document.getElementById("btnEntrena")
    entrena.addEventListener("click",entrenador)  
    function entrenador(){
         let dato1 = parseInt(document.getElementById("kilPecho").value);
         let dato2 = parseInt(document.getElementById("kilEspalda").value);
         let dato3 = parseInt(document.getElementById("kilPiernas").value); 
         let dato4 = document.getElementById("repeSem").value;
        kilaje = (dato1 + dato2 + dato3) * dato4;
        let resultPesas = document.getElementById("pesas");
        let p = document.createElement("p");
        if (kilaje < 100){
            let texto = `Manten una semana y aumenta el peso de ${kilaje} kg unos 50kg`;
            p.innerHTML = texto
            resultPesas.appendChild(p);
        }else if(kilaje >= 100 && kilaje <= 200){
            let texto = `Los ${kilaje} kg estan bien, manten el peso pero aumenta las repeticiones en la semana`;
            p.innerHTML = texto
            resultPesas.appendChild(p);
        }else if( kilaje > 200){ 
            let texto = `Tu peso de ${kilaje} kg ya es suficiente por ahora, coordinemos para nuevos ejercicios`;
            p.innerHTML = texto
            resultPesas.appendChild(p);
        } 
    }
        
    let hidr = document.getElementById("btnHidratacion")
    hidr.addEventListener("click", hidratacion)
    let consumir = 0;
    function hidratacion(){
        let liquido = document.getElementById("cantAgua").value;
        let frecLiq = document.getElementById("aguaSemana").value;
        consumir = liquido * frecLiq;
        let resultHidra = document.getElementById("hidrat");
        let p = document.createElement("p");
        if(consumir < 10){
            let texto = `Los ${consumir} Litros que ingieres son escasos, trata de llevarlos a 10 (2 por dia)`;
            p.innerHTML = texto
            resultHidra.appendChild(p);
        }else if(consumir == 10){
            let texto = `Tu consumo de ${consumir} Litros es bueno, mantenlo`;
            p.innerHTML = texto
            resultHidra.appendChild(p);
        }else if(consumir > 10){
            let texto =`El consumo de ${consumir} Litros en la semana no es malo en si, pero llevandolo a un promedio de 2L por dia ya esta bien`;
            p.innerHTML = texto
            resultHidra.appendChild(p);
        }
    }
    
    let recup = document.getElementById("btnRecup")
    recup.addEventListener("click", recuperacion)
    function recuperacion(){
        let diasPesas = document.getElementById("diPesas").value;;
        let diasCardio = document.getElementById("diCardio").value;;
        let resultDescans = document.getElementById("descans");
        let p = document.createElement("p");
        if(diasPesas < diasCardio){
            let texto = `Te recomiendo descansar dos dias en principio`;
            p.innerHTML = texto
            resultDescans.appendChild(p);
        }else if(diasPesas > diasCardio){
            let texto = `Con tres dias de descanso el cuerpo respondera bien`;
            p.innerHTML = texto
            resultDescans.appendChild(p);
        }else if(diasPesas == diasCardio){
            let texto = `En ese equilibrio te recomiendo un descanso activo`;
            p.innerHTML = texto
            resultDescans.appendChild(p);
        }
    }
    
    let miForm = document .getElementById ("contacto");
    miForm.addEventListener ("submit", validarForm);
    function validarForm(evt){
    evt.preventDefault ();
    alert("Por favor corrobora la informacion en la seccion inferior");
    let formulario = evt.target;
    let espacio = document.createElement("div");
    espacio.setAttribute("class","validacion");
    espacio.innerHTML =`<h2>Los datos ingresados son los siguientes:</h2>
    <p>Tu nombre y apellido son ${formulario.nombre.value} ${formulario.apellido.value}</p>
    <p>Tu telefono es ${formulario.telefono.value}</p>
    <p>El email ingresado es ${formulario.email.value} y <br>
        la disciplina seleccionada fue: ${formulario.grupo.value}</p>
        <p><a href="contacto.html" style="text-decoration: none;">Volver a ingresar</a></p>`
    document.body.appendChild(espacio);
    }
    
    ////////////////////////////////////////////JSON Ajax
    const URLGET = "data/data.json"
    const infoAlum = { nombre : document.getElementById("nombre").value,
    apellido : document.getElementById("apellido").value,
    email : document.getElementById("email").value,
    telefono : document.getElementById("telefono").value,
    grupo : document.getElementById("grupo").value};
    $("#enviar").click(() => {
    $.postJSON(URLGET, infoAlum ,(respuesta, estado) => {
    if(estado === "success"){
    $("body").prepend(`<div>
    Tus datos han sido guardados con exito
    </div>`);
    }
    });
    });
    
    
    const URLJSON = "data/data.json"
    let espacio = document.getElementById("ultIngresos");
    $(espacio).prepend('<button id="btn1">Ultimos Ingresos</button>');
    $("#btn1").click(() => {
    $.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
    let misDatos = respuesta;
    for (const dato of misDatos) {
    $(espacio).append(`<div>
    <h3>${dato.nombre} entrenara en
     ${dato.grupo}</h3>
    </div>`)
    }
    }
    });
    });    
