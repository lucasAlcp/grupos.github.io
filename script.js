var nomes = [];
var grupos = [];

function add(){
    //adiciona um novo item ao array
    nomes.push(prompt('Digite o nome do integrante'));
    atualizarTela();
}
function grupo_aleatorio()
{
    return Math.floor(Math.random() * grupos.length);
}
function atualizarTela()
{
    //Limpa a lista no html
    document.querySelector(".lista").innerHTML = '';
    document.querySelector("#grupo1").innerHTML = '';
    document.querySelector("#grupo2").innerHTML = '';
    
    //Percorre a lista nomes e atualiza na tela
    nomes.forEach((nome) => {
        document.querySelector(".lista").innerHTML += `<li>${nome}</li>`;
    });

    //Atualiza o grupo 1
    grupos[0].forEach( (nome) => {
        document.querySelector("#grupo1").innerHTML += `<li>${nome}</li>`;
    });
    //Atualiza o grupo 2
    grupos[1].forEach( (nome) => {
        document.querySelector("#grupo2").innerHTML += `<li>${nome}</li>`;
    });
}
function gerar(){

    grupos[0] = new Array();
    grupos[1] = new Array();

    nomes.forEach((nome) => {
        var num_gerado = grupo_aleatorio() + 1; //1 ou 2 ao invés de 0 e 1
        
        if(num_gerado == 1) {
            if(grupos[0].length == nomes.length / grupos.length) {
                grupos[1].push(nome);
            } else {
                grupos[0].push(nome);
            }
        } else {
            if(grupos[1].length == nomes.length / grupos.length) {
                grupos[0].push(nome);
            } else {
                grupos[1].push(nome);
            }
        }

    });

    atualizarTela();
    
}

