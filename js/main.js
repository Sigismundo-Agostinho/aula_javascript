/*
var nome = "Sigismundo Agostinho";
var idade = 48;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var n1 = 5;
var n2 = 3;
//alert("Meu primeiro js");
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);
//alert(frase.replace("Japão", "Brasil"));
*/
/*
//Array
var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("uva");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista.join(" | "));
lista.pop();
console.log(lista);
//alert(lista[1]);
*/
/*
// Dicionário
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
// lista de dicionários
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/
//Condicionias, Laços de repetição e Date
/*
var idade = 18;
if(idade>=18){
    alert("maior de idade")
}else{
    alert("menor de idade");
};
*/
/*
var idade = prompt ("Qual sua idade?");
if(idade>=18){
    alert("maior de idade")
}else{
    alert("menor de idade");
};
*/
//Estrutura de repetição com while
/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
}
*/
//Estrutura de repetição com o for
/*
var count;
for (count=0;count<=5; count++){
    console.log(count);
}
*/
// Trabalhando com datas
/*
var d = new Date();
alert(d.getMonth()+1);//Month sempre vai contar do zero, por isso sempre vai ter que por +1
alert(d.getMinutes());
alert(d.getDay()+1);
alert(d.getHours());
*/
// Funções
/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
/*
var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://coralnet.com.br/");//Abre em nova janela
    window.location.href = "https://coralnet.com.br/"; //Abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mouseove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mouseove").innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


