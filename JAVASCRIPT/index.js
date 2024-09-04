'use strict'
// // variables cons var let
// const texto = '5 + 5' //'todo lo que este entre comillas simples o dobles es un texto'
// const number = 5 + 5
// const booleana = true //true false null

// console.log(texto)
// console.log(number)
// console.log(booleana)

// const QueNuncaCambia = 'constante'
// console.log(QueNuncaCambia)

// var SiCambia = 'otra cosa'
// console.log(SiCambia)

// if (booleana) {
//  SiCambia = 'otra cosa'

//  let SiCambaPeroSoloDentroDe =
//   'si cambia pero solo existe dentro de la funcion que se crea'
// }

// console.log(SiCambia)
// // console.log(SiCambaPeroSoloDentroDe)

// // incluir una variable dentro de otra variable
// const nombre = 'ronald'
// var edad = 32
// const sexo = 'Machin'
// var estadoCivil = 'soltero'

// var presentacion = `Hola mi nombre es: ${nombre} tengo ${edad} años de edad, me identifico como un ${sexo} y mi estado civil es ${estadoCivil} asi que aprovechen papus`

// console.log(presentacion)

// interacciones
// alert(`alerta de texto con ${5 + 5} y todo tipo de variables`)

// let edad = prompt('¿cuantos años tienes?', 16)
// console.log(edad)

// let buscasParejas = confirm('¿Estas buscando Tilina?')
// console.log(buscasParejas)

// conversion de tipos de datos
// String
// Number
// Boolean

// let suma = '383979 + 9892783'
// alert(typeof suma)
// suma = String(suma)
// console.log(suma)

// operaciones matematicas
// let x = 10
// let y = 5

// let suma = x + y
// console.log(suma)
// let resta = x - y
// console.log(resta)
// let multiplicacion = x * y
// console.log(multiplicacion)
// let division = x / y
// console.log(division)
// let resto = x % y
// console.log(resto)
// let potenciacion = x ** y
// console.log(potenciacion)

// // modificaciones de los numeros
// x += 10
// x *= 5
// console.log(x)

// comparaciones: ==, !=, <, >, <=, >=
// condicionales
// let nombre = 'Julio'
// let edad = 56
// let telefono = 3198260273

// if (nombre == 'Fabian') {
//  // si
//  console.log('papu')
// } else {
//  // no
//  console.log('blasfemia')

alert(
 'Hola felicitaciones por tu increible gusto pero te necesito conocer con unas preguntas aver si eres adecuada a mis gustos'
)
let edad = prompt('edad', 18)

if (edad > 14 && edad < 24) {
 console.log('si')
} else {
 alert('Lo lamento, no eres la indicada para mi')
 throw new Error('No es la edad adecuada')
}

let plata = confirm('tiene plata')

if (plata) {
 console.log('Tiene plata')
} else {
 console.log('pobre')
 alert('Lo lamento, no eres la indicada para mi')
 return
}

let musica = prompt('¿Cuál es tu género de música favorito?', 'merengue')

if (musica === 'Salsa' && musica === 'Reggaeton' && musica === 'merengue') {
 console.log('Genial!')
} else {
 console.log('No es mi estilo')
 alert('Lo lamento, no eres la indicada para mi')
 return
}

let deporte = prompt('¿Cuál es tu deporte favorito?', 'Fútbol')

if (
 deporte === 'Fútbol' &&
 deporte === 'Baloncesto' &&
 deporte === 'voleybol'
) {
 console.log('¡Increible! ese es mi deporte favorito')
} else {
 console.log('No me gusta tanto')
 alert('Lo lamento, no eres la indicada para mi')
 return
}

let viajar = confirm('¿Te gustaria viajar?')

if (viajar) {
 console.log('¡A mi tambien podriamos viajar en un futuro!')
} else {
 console.log(
  'Me gustan las aventuras no quiero un mueble que no se mueva de su casa'
 )
 alert('Lo lamento, no eres la indicada para mi')
 return
}

let Viajes = prompt('¿Cual es tu lugar soñado para viajar?', 'Cancun')

if ((Viajes === 'Cancun' && Viajes && 'Nueva York') || Viajes === 'Suecia') {
 console.log('¡WOW concides con mi sueño de ir a cancun!')
} else {
 console.log('No llama mi atencion')
 alert('Lo lamento, no eres la indicada para mi')
 return
}

alert(
 'has comletado esto y me has interesado con tus resuestas, me gustaria tener una cita y conocernos mas a fondo '
)
