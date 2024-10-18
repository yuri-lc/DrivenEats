let nomeDoPrato = "";
let nomeDaBebida = "";
let nomeDoDoce = "";
let selecionarPrato="";
let selecionarBebi="";
let selecionarDoc="";
let valorDoPrato=0;
let valorBebida=0;
let valorDoce=0;
let textoFechamento="";
let vT = 0;




function selecionarComida(botao) {
  selecionarPrato = botao.innerHTML;
     const botaoSelecionadoAntes = document.querySelector(".conteiner .caixaSelecionada");

       if (botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("caixaSelecionada");
       }
     
     botao.classList.add('caixaSelecionada');

     nomeDoPrato = botao.querySelector(".nome_prato").innerText; // Pega o nome do prato
     valorDoPrato = Number(botao.querySelector(".valor").innerText); // Pega o valor do prato e converte para número
 }


function selecionarBebida(botao) {
  selecionarBebi = botao.innerHTML;
  const botaoSelecionadoAntes = document.querySelector(".conteiner2 .caixaSelecionada");

    if (botaoSelecionadoAntes !== null){
     botaoSelecionadoAntes.classList.remove("caixaSelecionada");
    }
  botao.classList.add('caixaSelecionada');

  nomeDaBebida = botao.querySelector(".nome_bebida").innerText; // Pega o nome do prato
  valorBebida = Number(botao.querySelector(".valor").innerText); // Pega o valor do prato e converte para número
}

function selecionarDoce(botao) {
  selecionarDoc = botao.innerHTML;
  const botaoSelecionadoAntes = document.querySelector(".conteiner3 .caixaSelecionada");

    if (botaoSelecionadoAntes !== null){
     botaoSelecionadoAntes.classList.remove("caixaSelecionada");
    }
  
  botao.classList.add('caixaSelecionada');

  nomeDoDoce = botao.querySelector(".nome_doce").innerText; // Pega o nome do prato
  valorDoce = Number(botao.querySelector(".valor").innerText); // Pega o valor do prato e converte para número

  if(selecionarPrato !== "") {
    if(selecionarBebi !== "") {
     if(selecionarDoc !== "") {
       document.querySelector(".botaofp").classList.add("botaoverde");
     }
   }
 }
 const textoDoBotao = document.querySelector('.textobotao');
 textoDoBotao.innerHTML = "Fechar pedido";
}

function fazerPedido(botao) {
  if(selecionarPrato !== "") {
    if(selecionarBebi !== "") {
     if(selecionarDoc !== "") {
        document.querySelector(".telaDeConfirmacao").classList.remove("escondido");
    }
   }
  } 
  const nomeRefei = document.getElementById("refe");
  nomeRefei.innerHTML = `${nomeDoPrato}: R$ ${valorDoPrato.toFixed(2)}`;

  const nomeBebi = document.getElementById("bebe");
  nomeBebi.innerHTML = `${nomeDaBebida}: R$ ${valorBebida.toFixed(2)}`;

  const nomeDoc = document.getElementById("doc");
  nomeDoc.innerHTML = `${nomeDoDoce}: R$ ${valorDoce.toFixed(2)}`;

  const txtValorTotal = document.getElementById("fechandoConta");
    txtValorTotal.innerHTML = `Total: R$${calcularPrecoFinal().toFixed(2)}`;
}

function calcularPrecoFinal() {
  vT = valorDoPrato + valorBebida + valorDoce;
  return vT;
}

function mensagemFinal(botao) {
  let mensagem

  mensagem= `Olá, gostaria de fazer o pedido:
- Prato: ${nomeDoPrato} 
- Bebida: ${nomeDaBebida} 
- Sobremesa: ${nomeDoDoce} 
Total: ${vT.toFixed(2)}`;

window.open ("https://wa.me//5511999999999?text=" + mensagem); 
}

function cancelarPedido(botao) {
  
  document.querySelector(".telaDeConfirmacao").classList.add("escondido");
     
}

