function bicho(
  nomeId,
  hpTotal,
  hp,
  ataque,
  defesa,
  atqMagico,
  dfsMagica,
  velocidade,
  energiaMaxima,
  poderMaximo,
  nivel,
  expLvl,
  exp,
  vivo,
  status,
  tipo,
  especie,
  classeDeBatalha,
  regiao
) {
  //do tipo para baixo é tudo string
  return {
    nomeId,
    hpTotal,
    hp,
    ataque,
    defesa,
    atqMagico,
    dfsMagica,
    velocidade,
    energiaMaxima,
    energia: energiaMaxima,
    poderMaximo,
    poder: poderMaximo,
    turno: 0,
    contadorTurno: 0,
    equipamentos: [],
    itensConsumiveis: [],
    magias: {
      "chamas Escarlate": {
        tipo: "fogo",
        dano: 50,
        poder: 13,
        multiplicadorDeDano: 1.3,
        descricao: "lança uma chama gigante",
      },
    },
    nivel,
    expLvl,
    exp,
    vivo,
    status,
    tipo,
    especie,
    classeDeBatalha,
    regiao,

    combate(inimigo) {
      // console.log(inimigo.hp);
      inimigo.hp =
        inimigo.hp - ((((2 * 50 + 10) / 100) * 60) / (90 + 60)) * 100;
      if (inimigo.hp < 0) {
        inimigo.hp = 0;
      }
      //  console.log(inimigo.hp);
      this.turno -= 1;
      this.contadorTurno = 0;
      batalha(eu, ele);
      eu.interface(ele);
    },

    uparAtributos() {
      let multiplicador = this.nivel;

      this.hpTotal = this.hpTotal + 65 * multiplicador;
      this.ataque = this.ataque + 5 * multiplicador;
      this.defesa = this.defesa + 5 * multiplicador;
      this.atqMagico = this.atqMagico + 5 * multiplicador;
      this.dfsMagica = this.dfsMagica + 5 * multiplicador;
      this.velocidade = this.velocidade + 5 * multiplicador;
      this.energiaMaxima = this.energiaMaxima + 10 * multiplicador;
      this.poder = this.poder + 45 * multiplicador;
    },
    fundir() {},
    transformar() {},
  };
}

/*
k
k
k
k
k
k
k
*/

import person from "./protagonista/protagonista.js";

let eu = person(
  "VegaKun",
  500,
  500,
  50,
  50,
  50,
  50,
  50,
  100,
  100,
  1,
  450,
  0,
  true,
  "normal",
  "hibrido",
  "humano",
  "hunter",
  "reino das tartarugas"
);

let ele = bicho(
  "pote de esterco",
  500,
  500,
  50,
  50,
  50,
  50,
  30,
  100,
  100,
  1,
  450,
  0,
  true,
  "normal",
  "hibrido",
  "humano",
  "hunter",
  "reino das tartarugas"
);

function batalha(I, he) {
  let menu = document.querySelector(".menuComandos");
  let vazio = document.querySelector(".espera");

  let me = setInterval(() => {
    I.contadorTurno++;

    if (I.turno < 1) {
      menu.setAttribute("style", "display:none");
      vazio.setAttribute("style", "display:flex");
    }

    if (I.contadorTurno >= 100) {
      clearInterval(me);
      clearInterval(inimigos);
      console.log("aliado");
      console.log(I.contadorTurno);
      I.turno++;

      vazio.setAttribute("style", "display:none");
      menu.setAttribute("style", "display:flex");
    }
  }, he.velocidade / 5);
  let inimigos = setInterval(() => {
    he.contadorTurno++;
    if (he.contadorTurno >= 100) {
      clearInterval(me);
      clearInterval(inimigos);
      he.turno++;

      console.log(he.turno);
      console.log(he.contadorTurno);
      console.log("inimigo");
      he.contadorTurno = 0;
      he.combate(eu);
    }
  }, I.velocidade / 5);
}

function m() {
  let a = document.querySelector(".menuComandos");
  a.removeAttribute("class");
  a.setAttribute("class", "menuComandos");
  console.log(a);
  eu.interface(ele);
}

//console.log(((((2 * 50 + 10) / 100) * 60) / (90 + 60)) * 100);

/*



eu.finalizarBatalha();
//eu.subirNivel();
eu.uparAtributos();

console.log(eu.nivel);
console.log(eu.expLvl);
console.log(eu.ataque);
// flat, lvl, flat, flat,atack,defesa,lvl inimigo, força do atack




*/
