let lista = ["Nego Ney","Xamuel","Capeta"];
const atualiza_lista = () =>{
    let mostrar = "Lista Vazia";
    if(lista.length > 0){   
        mostrar = "";
        for(let i = 0; i < lista.length; i++ ){
            mostrar += lista[i] + "<br>";
        }
    }
    document.getElementById("lista").innerHTML = mostrar;
}
const pegar_nome = () => validar_nome(document.getElementById("nome").value);
const mostra_erro = (erro) =>  document.getElementById("error").innerHTML = erro;
const validar_nome = (nome) => {
    mostra_erro("");
    for(let i = 0; i < lista.length; i++ ){
        if(lista[i].toUpperCase() == nome.toUpperCase()){
            mostra_erro("Nome já está na lista");
            return "";
        }
    }
    document.getElementById("nome").value = "";
    return nome;
}

const inserir_ultimo = () => {
    let nome = pegar_nome();
    if( nome != ""){
        lista.push(nome);
        atualiza_lista();
    } 
}
const inserir_primeiro = () => {
    let nome = pegar_nome();
    if( nome != ""){
        lista.unshift(nome);
        atualiza_lista();
    } 
}
   
const deletar_ultimo = () => {
    if (lista.length > 0){
    lista.pop();
    atualiza_lista();
    }
}

const deletar_primeiro = () => {
    if (lista.length > 0){
    lista.shift();
    atualiza_lista();
    }
}

const limpar_lista = () => {
    lista = [];
    atualiza_lista();
}
const AZ = () => {
    if( lista.lenght > 0);{
        lista.sort();
        atualiza_lista();
    }
}
const ZA = () => {
    if( lista.lenght > 0);{
        lista.reverse();
        atualiza_lista();
    }
}

