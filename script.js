let btn = document.querySelector("#next-little-cat-button")
console.log(btn)

let imgOne = "./assets/cat.two.svg";
let imgTwo = "./assets/cat.four.svg";
let imgThree = "./assets/cat.one.svg";
let imgFour = "./assets/cat.five.svg";

// colocar em um array
function mudarImagem() {
    let imagem = document.querySelector('.imagem')
    imagem.src = imgOne;
    let n = imgOne;                    
    imgOne = imgTwo;
    imgTwo = imgThree;
    imgThree = imgFour;
    imgFour = n;
}

btn.addEventListener("click", mudarImagem)
