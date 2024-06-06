function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")
//tem que pegar a tag img 
const img = document.querySelector("#profa img")

//substituir a imagem

if (html.classList.contains("light")) {
   //se tiver light mode coloca a foto respectiva
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Pedro sorrindo, está vestido com um casaco preto sem capuz com o fundo azul claro")
} else {
   img.setAttribute("src", "./assets/avatarescuro.png")
   img.setAttribute("alt", "Pedro sorrindo, está vestido com um casaco preto com capuz listra no olho, fundo de código binario")
}

}