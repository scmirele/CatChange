var imgAtual = "./assets/cat.two.svg";
var imgAnterior = "./assets/cat.one.svg";

function mudarImagem() {
    document.getElementsByClassName("imagem").src = imgAtual;
    let n = imgAtual;                    
    imgAtual = imgAnterior;
    imgAnterior = n;
}