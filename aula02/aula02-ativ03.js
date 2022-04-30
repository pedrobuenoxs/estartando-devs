/*3 - Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno 
e ao final escreva o nome do aluno, sua média e se ele foi aprovado, 
sabendo-se que a média para aprovação é igual ou superior a 8.*/



const aluno = {
    name: "",
    grades: [],
    gradesAverage:"",
    average: function(){
        var sum = 0;
        for(i = 0; i < this.grades.length;i++){
            sum = sum + this.grades[i]             
        }
        this.gradesAverage =  sum/this.grades.length
        return this.gradesAverage;      
    },
    isApproved: function(){
        if(this.average() >= 8 ){
            console.log("A média do(a) aluno(a) " + this.name
            + " é " + this.gradesAverage
            + " e está aprovado(a)!")
        } else {
            console.log("A média do(a) aluno(a) " + this.name
            + " é " + this.gradesAverage
            + " e está reprovado(a)!")
        }
    }

}

aluno.name = "Pedro Bueno";
aluno.grades[0] = 10;
aluno.grades[1] = 3;
aluno.grades[2] = 10;
aluno.grades[3] = 9;
aluno.grades[4] = 8;
aluno.grades[5] = 10;
aluno.grades[6] = 8.5;

aluno.isApproved();

