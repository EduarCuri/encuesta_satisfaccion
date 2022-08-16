let contador = 1
let texto = ""
function puntaje(elemento) {
    contador++
    if(contador % 2 === 0) {
        elemento.style.color = "white"
        elemento.style.background = "rgb(252,118,19)"
        texto = elemento.innerHTML
        console.log(texto)
    } else {
        elemento.style.color = "rgb(128,136,149)"
        elemento.style.background = "rgb(38,47,56)"
    }
}



