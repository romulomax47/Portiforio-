

const btnCalc = document.querySelector('.card-btns');
const form = document.querySelector('form')

btnCalc.addEventListener('click', calcLim)

function calcLim(e) {

    if(form.checkValidity()){

        if (e.target.type === 'button') {
    
            if (e.target.dataset.acao === 'calcular') {
                calcMedia()
    
            }
    
            else {
    
                limparInpult()
    
                return console.log('Limpo')

            }
        }
    }else{
        alert('Por favor preencha os campos com numero de 0 á 10')
    }

}

function calcMedia() {

    const nota1 = parseInt(document.querySelector('.nota1').value);
    const nota2 = parseInt(document.querySelector('.nota2').value);
    const res = (nota1 + nota2) / 2;

    showMedia(res);

}

function showMedia(media) {
    document.querySelector('.media').value = media

    situação(media);
}

function limparInpult() {
    parseInt(document.querySelector('.nota1').value = '');
    parseInt(document.querySelector('.nota2').value = '');


}

function situação(media) {

    if (media < 4) {

        //reprovado

        const boxSitua = document.querySelector('.card-situacao')
        boxSitua.innerHTML = 'Reprovado'
        boxSitua.style.background = 'red'
    }

    if (media >= 4 && media < 7) {
        const boxSitua = document.querySelector('.card-situacao')
        boxSitua.innerHTML = 'Recuperacão'
        boxSitua.style.background = 'yellow'
    }

    if (media >= 7) {
        const boxSitua = document.querySelector('.card-situacao')
        boxSitua.innerHTML = 'Aprovado'
        boxSitua.style.background = 'green'
    }
}