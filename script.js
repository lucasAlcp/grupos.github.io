var quantia=0;
var nome= [];
var numeros = [];
var aux;
function add(){
    var ul = document.getElementById("ul").innerHTML;
    nome[quantia] = prompt('Digite o nome do integrante');
    ul = ul+ "<li>"+ nome[quantia] + "<\li>";
    document.getElementById("ul").innerHTML= ul;
    quantia = quantia +1;
}
function gerar(){
    var grupo1 = document.getElementById("grupo1").innerHTML
    var grupo2 = document.getElementById("grupo2").innerHTML
    
        
    //Limpa a lista
        numeros = [];
        grupo1 = "";
        document.getElementById("grupo1").innerHTML = grupo1;
        grupo2 = "";
        document.getElementById("grupo2").innerHTML = grupo1;
    
    for(var i = 0; i < quantia/2; i++ ){
        grupo1 = grupo1 + "<li>"+nome[numero_aleatorio()]+"</li>";
        document.getElementById("grupo1").innerHTML = grupo1;
    }
    for(var i = 0; i < quantia/2; i++ ){
        grupo2 = grupo2 + "<li>"+nome[numero_aleatorio()]+"</li>";
        document.getElementById("grupo2").innerHTML = grupo2;
    }
}

function numero_aleatorio(){
    while(numeros.length <=quantia){
        aux = Math.floor(Math.random()*quantia);
        if(numeros.indexOf(aux) == -1){
            var aleatorio = aux;
            numeros.push(aleatorio);
            return aleatorio;
        }
    }
}
