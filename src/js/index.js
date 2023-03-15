

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');



botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', ()=>{
        console.log('brabo');
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imgAtiva = document.querySelector('.ativa');
        imgAtiva.classList.remove('ativa');

        imagens[indice].classList.add('ativa');


    })

})