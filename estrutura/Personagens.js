console.log("funfou");
function a() {
  console.log("sadfsdfsdfafasfasf");
}
function PersonagemPrincipal(ctx, teclado) {
  // movimentação e fora de combate
  let personagem = new Image();
  personagem.src = "./public/personagem.png";
  let andarX = 0;
  let andarY = 0;
  let velocidade = 3;
  let numSprites = 4;
  let movimentoAnimado = 0;
  let temporizador;
  let lado = 0;

  // Combate RPG

  return {
    movimento: false,
    gerenciar() {
      if (teclado.esquerda) {
        andarX -= velocidade;
      } else if (teclado.direita) {
        andarX += velocidade;
      }
      if (teclado.cima) {
        andarY -= velocidade;
      } else if (teclado.baixo) {
        andarY += velocidade;
      }
    },
    desenhar() {
      // imagem, x inicial recorte, y inicial recorte, largura recorte, altura recorte, posX, posY, largura magem, altura imagem
      this.gerenciar();
      let recorteValorX = (personagem.width / numSprites) * movimentoAnimado;
      let recorteValorY = (personagem.height / numSprites) * lado;
      let recorteL = personagem.width / numSprites;
      let recorteA = personagem.height / numSprites;

      if (teclado.esquerda) {
        lado = 2;
      }
      if (teclado.direita) {
        lado = 3;
      }
      if (teclado.cima) {
        lado = 1;
      }
      if (teclado.baixo) {
        lado = 0;
      }
      ctx.drawImage(
        personagem,
        recorteValorX,
        recorteValorY,
        recorteL,
        recorteA,
        andarX,
        andarY,
        recorteL / 2,
        recorteA / 2
      );
    },
    caminhar(a) {
      if (a == true) {
        temporizador = setInterval(() => {
          console.log("bati aki");
          movimentoAnimado++;
          if (movimentoAnimado > 3) {
            movimentoAnimado = 0;
          }
        }, 200);
      } else {
        clearInterval(temporizador);
      }
    },
    hp: 500,
    ataque: 50,
    defesa: 50,
    atqMagico: 50,
    dfsMagica: 50,
    velocidade: 50,
    nivel: 1,
    exp: 0,
    tipo: "hibrido",
    especie: "humano",
    classeDeBatalha: "hunter",
    regiao: "reino das tartarugas",
    combate() {},
    subirNivel() {},
    fundir() {},
    transformar() {},
  };
}

export default PersonagemPrincipal;
