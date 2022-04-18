//Boas vindas ao cliente
alert(`Bem vindo ao sistema lanche bacana!`);

//Recebendo o nome do cliente
var nomeCliente;
if(nomeCliente = prompt(`Digite seu nome:`)){
    alert(`${nomeCliente}, faça cadastro para começar a fazer seus pedidos!`);
}
else{
while(nomeCliente == ""){
    alert(`Você ainda não informou seu nome!`);
    if(nomeCliente = prompt(`Informe seu nome para continuar:`)){
    alert(`${nomeCliente}, faça cadastro para começar a fazer seus pedidos:`);
    break;
    }
}
}

//CADASTRO
var nomeUsuario;
if(nomeUsuario = prompt(`Crie seu nome de usuário ${nomeCliente}:`)){
    alert(`A seguir crie sua senha`);
}
else{
while(nomeUsuario == ""){
    alert(`${nomeCliente}, você ainda não criou seu nome de usuário`);
    if(nomeUsuario = prompt(`${nomeCliente}, crie seu nome de usuário para continuar:`)){
    alert(`A seguir crie sua senha`)
    break;
    }
}
}

var senhaUsuario;
if(senhaUsuario = prompt(`Crie sua senha para finalizar seu cadastro ${nomeCliente}`)){
    alert(`Cadastro confirmado ${nomeCliente}, faça login para começar \n
    a fazer seus pedidos!`)
}
else{
while(senhaUsuario == ""){
    alert(`${nomeCliente} você ainda não criou sua senha!`);
    if(senhaUsuario = prompt(`Crie sua senha para finalizar o cadastro ${nomeCliente}!`)){
    alert(`Cadastro confirmado ${nomeCliente}, faça login para começar \n
    a fazer seus pedidos!`)
    break;
    }
}
}

//LOGIN
var loginNomeUsuario = prompt(`Nome de usuário:`);
if(loginNomeUsuario == nomeUsuario){
}
else{
while(loginNomeUsuario != nomeUsuario || loginNomeUsuario == ""){
    alert(`Nome de usuário incorreto ou não informado!`);
    loginNomeUsuario = prompt(`Digite seu nome de usuário para Logar:`);
    if(loginNomeUsuario == nomeUsuario){
    break;
    }
}
}

var senhaLogin = prompt(`Senha:`);
if(senhaLogin == senhaUsuario){
    alert(`Bem vindo ${nomeCliente}!`);
    console.log(`O cliente ${nomeCliente}, está conectado`)
}
else{
while(senhaLogin != senhaUsuario || senhaLogin == ""){
    alert(`Senha incorreta ou não informada!`);
    senhaLogin = prompt(`Digite sua senha para Logar:`);
    if(senhaLogin == senhaUsuario){
    alert(`Bem vindo ${nomeCliente}!`);
    console.log(`O cliente ${nomeCliente}, está conectado`)
    break;
    }
}
}

//MOSTRANDO O CARDÁPIO
alert(`Cardápio\n
       Lanche: Bobo Chobo Big Chease \n
       Lanche: Big Bobo Caramelo\n
       Lanche: Double Bacon Chease\n
       Bebida: Coquinha Geladinha\n
       Bebida: Refri Bacana\n
       Bebida: Astro Ice Refri\n
       Sobremesa: Chocolate Bobo Fax\n
       Sobremesa: Sorvete Menta Lonil\n
       Sobremesa: Balinha 7 Belo`);

//OPÇÕES DO CARDÁPIO
//LANCHES
var lanche1 = "Bobo Chobo Big Chease";
var lanche2 = "Big Bobo Caramelo";
var lanche3 = "Double Bacon Chease";

//BEBIDAS
var bebida1 = "Coquinha Geladinha";
var bebida2 = "Refri Bacana";
var bebida3 = "Astro Ice Refri";

//SOBREMESAS
var sobremesa1 = "Chocolate Bobo Fax";
var sobremesa2 = "Sorvete Menta Lonil";
var sobremesa3 = "Balinha 7 Belo";

//SELECIONAR, LANCHES BEBIDAS OU SOBREMESAS

var pedidoLanche = prompt(`Peça seu lanche:`);
if(pedidoLanche == lanche1 || pedidoLanche == lanche2 || pedidoLanche == lanche3){
}
else{
while(pedidoLanche != lanche1 || pedidoLanche != lanche2 || pedidoLanche != lanche3 || pedidoLanche == ""){
    alert(`Nós não temos este lanche aqui ou você não informou o lanche ${nomeCliente}`);
    pedidoLanche = prompt(`Peça algum lanche do cardápio:`);
    if(pedidoLanche == lanche1 || pedidoLanche == lanche2 || pedidoLanche == lanche3){
    break;
    }
}
}

var pedidoBebida = prompt(`Peça sua bebida:`);
if(pedidoBebida == bebida1 || pedidoBebida == bebida2 || pedidoBebida == bebida3){
}
else{
while(pedidoBebida != bebida1 || pedidoBebida != bebida2 || pedidoBebida != bebida3 || pedidoBebida == ""){
    alert(`Não temos essa bebida aqui ou você não informou a bebida ${nomeCliente}`);
    pedidoBebida = prompt(`Peça alguma bebida do cardápio:`);
    if(pedidoBebida == bebida1 || pedidoBebida == bebida2 || pedidoBebida == bebida3){
    break;
    }
}
}

var pedidoSobremesa = prompt(`Peça sua sobremesa:`);
if(pedidoSobremesa == sobremesa1 || pedidoSobremesa == sobremesa2 || pedidoSobremesa == sobremesa3){
    alert(`A seguir informe onde entregar seu pedido ${nomeCliente}`);
}
else{
while(pedidoSobremesa != sobremesa1 || pedidoSobremesa != sobremesa2 || pedidoSobremesa != sobremesa3 || pedidoSobremesa == ""){
    alert(`Não temos essa sobremesa aqui ou você não informou a sobremesa ${nomeCliente}`);
    pedidoSobremesa = prompt(`Peça alguma sobremesa do cardápio:`)
    if(pedidoSobremesa == sobremesa1 || pedidoSobremesa == sobremesa2 || pedidoSobremesa == sobremesa3){
    alert(`A seguir informe onde entregar seu pedido ${nomeCliente}`);
    break;     
    }
}
}

//LOCALIZAÇÃO PARA ENTREGA DO PEDIDO
alert(`${nomeCliente}, obrigado por pedir com a gente! \n
      precisamos saber onde podemos entregar o pedido\n
      informe pra gente a seguir!`)

var cidade = prompt(`Cidade:`);
var bairro = prompt(`Bairro:`);
var rua = prompt(`Rua:`);
var numeroCasa = prompt(`Nº:`);

//INFORMANDO O SISTEMA PARA A ENTREGA
console.log(`${nomeCliente}, fez um pedido!\n
             Um: ${pedidoLanche}\n
             Uma: ${pedidoBebida}\n
             E uma: ${pedidoSobremesa}\n
             Entregar em!
             Cidade: ${cidade}\n
             Bairro: ${bairro}\n
             Rua: ${rua}\n
             Nº: ${numeroCasa}`);