export default function iniciarBatalha() {
  let telaCanvas = document.querySelector("#canvasBody");
  let telaBatalha = document.querySelector("#tela");

  telaCanvas.setAttribute("style", "display:none");
  telaBatalha.setAttribute("style", "display:flex");

  batalha(eu, ele);

  eu.interface(ele);
}
