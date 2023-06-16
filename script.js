let btn = document.querySelector("#next-little-cat-button")
console.log(btn)

let imgOne = "./assets/cat.two.svg";
let imgTwo = "./assets/cat.one.svg";

function mudarImagem() {
    let imagem = document.querySelector('.imagem')
    imagem.src = imgOne;
    let n = imgOne;                    
    imgOne = imgTwo;
    imgTwo = imgOne;
    imgTwo = n;
}

btn.addEventListener("click", mudarImagem)
