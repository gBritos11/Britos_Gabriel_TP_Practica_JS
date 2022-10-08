//declarando las constantes, agregando el envio, es decir, el getElementById
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("peligro")

//creando un evento. Este se accionará cuando apretemos el boton envíar
form.addEventListener("submit", e => {
    e.preventDefault()

    //creando variable warnings. La utilizaremos más adelante
    let warnings = ""

    let entrar = false //le dejo un valor a la variable entrar

    //con la variable regexEmail verifico que el mail se valido. La expresion regular la saque de una web que investigué
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //variable para dejar mensaje mas adelante, de warnings o de felicitaciones
    parrafo.innerHTML = ""

    //agregando condicionales para los campos
    if (nombre.value.length < 6) {
        //en caso de que no se cumpla la condicional, mostrar mensaje a través de la variable warnings
        warnings += `El nombre no es valido<br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        //en caso de que no se cumpla la condicional, mostrar mensaje a través de la variable warnings
        warnings += `El email no es valido<br>`
        entrar = true
    }
    if (pass.value.length < 8) {
        //en caso de que no se cumpla la condicional, mostrar mensaje a través de la variable warnings
        warnings += `La contraseña no es valida<br>`
        entrar = true
    }

    //en caso de entrar y que este todo correcto, mostra mensaje
    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "felicitaciones widi, no eres un robot!!!!!"
    }
})