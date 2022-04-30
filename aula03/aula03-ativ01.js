/*
Criar a função (inverter) 
que recebe uma string e 
retorna um inverso dela “salve” => “evlas”
*/


const vogais = ["a","e","i","o","u"];

const inverterString = (str) =>{
    var strInvertida = "";
    for(i = str.length - 1 ; i > -1; i--)
    {
        strInvertida += str[i]
    }
    return strInvertida
}

/*
Criar a função (contarNumeroVogais) que recebe uma string 
e retorna o número de vogais que ela tem (maiusculas e minusculas) 
“salve” => 2
*/

const contVogais = (str) => {

    let contador = 0;
    str.toLowerCase(); 

    for(i = 0 ; i < str.length; i++)
    {
        for(j=0 ; j < vogais.length ; j++){

            if(str[i] === vogais[j]){
                contador++;
            }
        }
        
    }
    return contador;   
}


/*
Extra: Criar a função (fazerRelatorio) 
que recebe uma string e retorna um objeto com a própria string, 
o inverso da string e quantas vogais ela tem 
“salve” => 
{ 
    palavra: “salve”,
    palavraInverso: “evlas”,
    numeroVogais: 2 
}
*/


const fazerRelatorio = (str) => {
    const palavras = {
        palavra: str,
        palavraInverso: inverterString(str),
        numeroVogais: contVogais(str)
    }

    return palavras
    
}

/*
Extra2: Se receber algo diferente de string 
da um console.log(“oh carai”) e retorna undefined
*/

const isNotString = (str) => {
    var aux = /[!-\/:-@[-`{-~]/;
    return aux.test(str);
}

const mainFunction = (str) => {

    if(!isNotString(str))
    {
        console.log(fazerRelatorio(str));
    } 
    else 
    {
        console.log("oh carai");
        return undefined;
    }
}

mainFunction("Felicia");
