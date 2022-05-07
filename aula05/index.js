// Javascript loops em arrays
// Metodos arrays



const alunos = ['Pedro','Bruno','Claudio','Danilo']

// -> push
console.log("METODO PUSH:")
alunos.push('Fernando');
console.log(alunos)
console.log('---------------------------------------------------')

// -> pop
console.log("METODO POP:")
console.log('letra removida: ',alunos.pop());
console.log(alunos)
console.log('---------------------------------------------------')

//Diferença entre propriedades e metodos
console.log("METODO OU PROPRIEDADE")
console.log(alunos.length);
console.log(alunos.pop);
console.log('---------------------------------------------------')


//Metodos de loops
// -> forEach
console.log('---------------------------------------------------')
console.log("METODO forEach")
const naoAprovados = [];
function verificarNota(aluno, index){
    console.log(aluno,index);

    if(index>2){
        naoAprovados.push(aluno)
    }

}

alunos.forEach(verificarNota);


console.log('---------------------------------------------------')


console.log("METODO map")
// -> map

const alunosConcorrentes = [
    { nome: 'Elisa', nota: 8 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Eduardo', nota: 6 },
    { nome: 'Matheus', nota: 5 },
    { nome: 'Felicia', nota: 10 },
    
]
    
function gerarParticipante(objAluno, index){
    let mensagem;
    let aprovado;

    if(objAluno.nota > 6){
        mensagem = `${objAluno.nome} parabéns!`
        aprovado = true;
    } else {
        mensagem = `${objAluno.nome} oh noh!`
        aprovado = false;
    }
    return {
        nome: objAluno.nome,
        nota: objAluno.nota,
        mensagem,
        aprovado,
    
    }  
}

const participante = alunosConcorrentes.map(gerarParticipante);
console.log(participante)
console.log(alunosConcorrentes)


console.log('---------------------------------------------------')

const transacoes = [
    {valor: 150, tipo: 'saque'},
    {valor: 200, tipo: 'deposito'},
    {valor: 300, tipo: 'saque'},
    {valor: 450, tipo: 'deposito'},
    {valor: 100, tipo: 'saque'},

]

console.log("METODO filter")

const saques = transacoes.filter( (transacao) => {
    return transacao.tipo === 'saque';
})

console.log(saques)

let valorSaques = 0;

saques.forEach(saque => {
    valorSaques = valorSaques + saque.valor;
})

//console.log(valorSaques)


console.log('---------------------------------------------------')
console.log('FILTER - EXEMPLO')
const alunosAprovados = participante.filter(item => item.aprovado);
console.log(alunosAprovados)

console.log('---------------------------------------------------')
console.log('DESESTRUTURAÇÃO - EXEMPLO')

function gerarParticipante2(objAluno, index){
    const { nome, nota} = objAluno
    let mensagem;
    let aprovado;

    if(nota > 6){
        mensagem = `${nome} parabéns!`
        aprovado = true;
    } else {
        mensagem = `${nome} oh noh!`
        aprovado = false;
    }
    return {
        nome,
        nota,
        mensagem,
        aprovado,
    
    }  
}

const participante2 = alunosConcorrentes.map(gerarParticipante2);
console.log(participante2)

console.log('---------------------------------------------------')
console.log('SPREAD - EXEMPLO');
//rest
const bebidas = ['suco','agua','refri','cerveja'];
const lanches = ['hamb', 'pizza','macarrao'];
const sobremesas = ['doce', 'brigadeiro','pudim'];

const menu = [...bebidas,...lanches,...sobremesas];
console.log(menu)

console.log('---------------------------------------------------')
console.log('REST - EXEMPLO');

const alunoFront = { nome: 'Joao', nota:9};
const alunoFrontCompleto = {...alunoFront,idade: 19, dataNascimento: '02/02/1999'}
console.log(alunoFrontCompleto)

console.log('---------------------------------------------------')
console.log('DESESTRUTURAÇÃO + REST - EXEMPLO');
const { dataNascimento, ...restDados } = alunoFrontCompleto
console.log(restDados)

console.log('---------------------------------------------------')
console.log('EXEMPLO DE REST PARA FUNÇÕES');

function somar(n1, n2, n3, n4){
    return n1+n2+n3+n4;
}

function somar2(...numeros){
    let valorTotal = 0;
    numeros.forEach(n => {
        valorTotal = valorTotal + n;
    })
    return valorTotal
}

console.log(somar(1,2,4,5));
console.log(somar2(1,2,4,5,6,7,8,9,10));
