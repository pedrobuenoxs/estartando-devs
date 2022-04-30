/*1 - Faça um algoritmo que leia o nome e a 
idade de uma pessoa e ao final escreva o nome da pessoa, 
sua idade e se ela é maior de idade ou não.*/


const pessoa = {
    name: "",
    age: "",
    bio: function(){
        console.log("Essa pessoa se chama " + this.name + " e tem " + this.age + " anos.")
    },
    ofAge: function(){
        if(this.age >= 18) {
         console.log("Ou seja, ela é maior de idade")
        } else {
            console.log("Ou seja, ela é menor de idade")
        }}    
};

pessoa.name = "Pedro Bueno";
pessoa.age = 23;
pessoa.bio();
pessoa.ofAge();

