let formContato = document.getElementById('form-contato');
let divLista = document.getElementById('lista');
let nome = [];
let email = [];
let telefone = [];
let assunto = [];
let mensagem = [];

formContato.addEventListener("submit", (event) => {
    event.preventDefault();
    //Atribundo os valores
    nome.push(formContato.nome.value);
    email.push(formContato.email.value);
    telefone.push(formContato.telefone.value);
    assunto.push(formContato.assunto.value);
    mensagem.push(formContato.mensagem.value);
    //preencher a div:
    gerarLista();
})

function gerarLista() {
    let auxLista = "";

    for (let posicao = 0; posicao < nome.length; posicao++) {
        auxLista += `<div class="card">
                        <div class="dados-label">
                            <div>Nome Completo:</div>
                            <div>${nome[posicao]}</div>
                        </div>
                        <div class="dados-label">
                            <div>E-mail:</div>
                            <div>${email[posicao]}</div>
                        </div>
                        <div class="dados-label">
                            <div>Nome Completo:</div>
                            <div>${telefone[posicao]}</div>
                        </div>
                        <div class="dados-label">
                            <div>Assunto:</div>
                            <div>${assunto[posicao]}</div>
                        </div>
                        <div class="dados-label">
                            <div>Mensagem:</div>
                            <div>${mensagem[posicao]}</div>
                        </div>
                    </div>`
    }
    divLista.innerHTML = auxLista;

}