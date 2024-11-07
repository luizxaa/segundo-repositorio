function criaCartao (item, pergunta, resposta) {
    //console.log(item, pergunta,resposta)

    let flahcard = document.getElementById('flascard');
    let cartao = document.createElement('article');

    cartao.className = 'cartao';

    cartao.innerHTML =  `
        <div class="cartao__conteudo">
                <h3>${item}</h3>
                
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta}</p>
                </div>
                
                <div class="cartao__conteudo__resposta">
                    <p>${resposta}</p>
                </div>
            </div>     
      `
      let respostaEstavisivel = false;

      function viracartao () {
        respostaEstavisivel= !variavelEstavisisvel;
        cartao.classList.toggle('active', viracartao);
      }

      cartao.addEventListener('click', viracartao)


    

    flahcard.appendChield(cartao);
