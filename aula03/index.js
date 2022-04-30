/* 
--> FUNÇÕES <--
Aqui em baixo estão 3 formas diferentes de declarar uma função
*/

function iniciarAula (nomeAluno){
    return nomeAluno + 1
}

const iniciarAula2 = function(nomeAluno){
    return nomeAluno + 2
}

const iniciarAula3 = (nomeAluno) => {
    return nomeAluno + 3
}

const Aluno = {
    Nome: 'Pedro',
    Age: 23,
    gender: 'Masculino',
    class: 'Backend',
    bio(){
        console.log(`${this.Nome} ${this.Age} ${this.gender} ${this.class}`)
    }
     
}
//Aluno.bio();


/*
--> ARRAYS <--
metodos
unshift -> add um item no começo do array
shift -> remove um item no começo do array
pop -> remove um item do final do array
push -> adiciona um item no começo do array
*/


const Alunos = ['Pedro', 'Cleber', 'Manuel'];
//Alunos.shift();
//Alunos.pop();
//Alunos.unshift('Claudio');
//Alunos.push('Matheus');
//console.log(Alunos);

const pessoas = [
    { nome:'Pedro', idade: 20 },
    { nome:'João', idade: 21 },
    { nome:'Cleber', idade: 22 },
    { nome:'Eduardo', idade: 24 },
];

//console.log(pessoas.length)

for (let i = 0; i < pessoas.length; i++)
{
    console.log(pessoas[i].idade)
}

