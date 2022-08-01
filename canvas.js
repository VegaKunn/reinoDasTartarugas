import PersonagemPrincipal from "./estrutura/Personagens.js";
const canvas = document.getElementById("canvasBody");
var ctx = canvas.getContext("2d");

let canvasLargura = 1600;
let canvasAltura = 900;
let andar = 0;
let pxAltura = 50;
let pxlargura = 50;
let posicaoX = 0;
let posicaoY = 0;
let velocidade = 50;
let anima;

const teclado = {
  esquerda: false,
  cima: false,
  direita: false,
  baixo: false,
  movimento: true,
};

let jogador = PersonagemPrincipal(ctx, teclado);

document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "a":
      teclado.esquerda = true;
      jogador.movimento == false ? jogador.caminhar(true) : null;
      jogador.movimento = true;
      break;
    case "w":
      teclado.cima = true;
      jogador.movimento == false ? jogador.caminhar(true) : null;
      jogador.movimento = true;
      break;
    case "d":
      teclado.direita = true;
      jogador.movimento == false ? jogador.caminhar(true) : null;
      jogador.movimento = true;
      break;
    case "s":
      teclado.baixo = true;
      jogador.movimento == false ? jogador.caminhar(true) : null;
      jogador.movimento = true;
      break;
    default:
  }
});
document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
      teclado.esquerda = false;
      jogador.movimento == true ? jogador.caminhar(false) : null;
      jogador.movimento = false;
      break;
    case "w":
      teclado.cima = false;
      jogador.movimento == true ? jogador.caminhar(false) : null;
      jogador.movimento = false;
      break;
    case "d":
      teclado.direita = false;
      jogador.movimento == true ? jogador.caminhar(false) : null;
      jogador.movimento = false;
      break;
    case "s":
      teclado.baixo = false;
      jogador.movimento == true ? jogador.caminhar(false) : null;
      jogador.movimento = false;
      break;
    default:
  }
});

function animacao() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  jogador.desenhar();

  requestAnimationFrame(animacao);
}

animacao();
//sherabilowsadaw

/*
  ctx.fillStyle = "#0000ff";
  ctx.fillRect(posicaoX, posicaoY, pxAltura, pxlargura);

  if (posicaoX + pxlargura >= canvasLargura) {
    posicaoX = canvasLargura - pxlargura;
  }

  anima = requestAnimationFrame(animacao);



*/
