escrever = msg => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return `x1 = x2 = ${div(-b, mult(2, a))}`;
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           " x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}



const set_resultado () => document.getElementById("resultado").value =
let a = 0;
let b = 0;
let resultado = 0;
let executar = "";

calcular() =>{
    if(executar != ""){
        if(executar = "+") mostrar_resultado(soma(a,b));
        if(executar = "-") mostrar_resultado(sub(a,b));
        if(executar = "/") mostrar_resultado(div(a,b));
        if(executar = "*") mostrar_resultado(mult(a,b));
        executar ="";
        a = ""
        b = "";
    }
}

function digitando(tecla){
    if(executar == ""){ 
        a += tecla;
        alert(a);
    }else{
        b += tecla;
    }
    
}