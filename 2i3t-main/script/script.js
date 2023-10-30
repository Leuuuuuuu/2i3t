let a = "";
let b = "";
let c = "";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = "";
let executar = "";
let temPonto = false;
let desligada = false;

soma = (a,b) => Number(a) + Number(b);
sub = (a,b) => Number(a) - Number(b);
mult = (a,b) => Number(a) * Number(b);
div = (a,b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);

equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    document.getElementById("delta").innerHTML = delta;
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           " x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}

function mostrar_resultado(){
    document.getElementById("resultado").value = valor;
}

function raiz_quadrada(){
    valor = raiz(valor);
    mostrar_resultado;
    valor = "";
} 

function calcular(){
    if(desligada) return;
    if(executar != ""){
        b = valor;
        if(executar == "soma") valor = soma(Number(a),Number(b));
        if(executar == "sub") valor = sub(Number(a),Number(b));
        if(executar == "div") valor = div(Number(a),Number(b));
        if(executar == "mult") valor = mult(Number(a),Number(b));
        mostrar_resultado();
        executar = "";
        a = "";
        b = "";
        valor = "";
        temPonto = false;
    }
}

function desliga(){
    if (desligada){
        desligada = false;
        zerar();
    }else{
        zerar();
        mostrar_resultado();
        desligada = true;
    }
    desligada = !desligada;
}

function porcentagem(){
    if(executar == "mult"){
        b = valor;
        valor = div(mult(Number(a),Number(b)), 100);
        mostrar_resultado();
        valor = "";
    }
}

function zerar(){
    if (desligada) return;
    a = "";
    b = "";
    valor = "0";
    mostrar_resultado();
    executar = "";
    valor = "";
}

function operacao(op){
    if(desligada) return;
    executar = op;
    a = valor;
    valor = "";
}

function digitando(tecla){
    if(desligada) return;
   if (tecla == "."){
       if(!temPonto) {
         valor = valor + tecla;
         mostrar_resultado();
         temPonto = true;
       }
       return;
   }
   valor = valor + tecla;
   mostrar_resultado();
}

const calcular_equacao = ()=>{
    if(a !=""&& a !="0"){
        if(a != "+"){a = -(Number(a))} else {a=Number(a)};
        if(b != "+"){b = -(Number(b))} else {a=Number(b)};
        if(c != "+"){c = -(Number(c))} else {c=Number(c)} ;
        document.getElementById("raiz").innerHTML = equacao2Grau(a,b,c);   
    }
}

const set_sinal_a = () =>{
    sa = document.getElementById("sinal_a").value;
     calcular_equacao();
}

const set_sinal_b = () =>{
    sb = document.getElementById("sinal_b").value;
    calcular_equacao();
}

const set_sinal_c = () =>{
    sc = document.getElementById("sinal_c").value;
    calcular_equacao();
}

const set_valor_a = () =>{
    sc = document.getElementById("valor_a").value;
    calcular_equacao();
}

const set_valor_b = () =>{
    sc = document.getElementById("valor_b").value;
    calcular_equacao();
}

const set_valor_c = () =>{
    sc = document.getElementById("valor_c").value;
    calcular_equacao();
}