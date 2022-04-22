/*2 - Faça um algoritmo que leia o nome e o salário de um funcionário. 
O funcionário terá um aumento de 18%, caso seu novo salário seja acima de R$3.000,00, 
ele deverá declarar imposto. Ao fim do algoritmo diga ao usuário seu nome, 
seu novo salário e se ele deverá ou não declarar imposto.
*/

const pessoa = {
    name: "",
    salary: "",
    newSalary: "",
    increaseSalary: function(){        
        this.newSalary = this.salary*1.18;     
    },
    isGreaterThan3000: function(){
        if(this.newSalary >= 3000){
            return true;
        } else { return false; }
    },
    bio: function(){
        
        if(this.isGreaterThan3000()) {
            console.log("O nome do(a) funcionário(a) é: " + this.name 
            + ". Seu novo salário é de R$" + this.newSalary 
            + " e precisará pagar impostos." )

        } else {
            console.log("O nome do(a) funcionário(a) é: " + this.name 
            + ". Seu novo salário é de R$" + this.newSalary 
            + " e não precisará pagar impostos." )
        }
    }
    
}

pessoa.name = "Pedro Bueno";
pessoa.salary = 2500;
pessoa.increaseSalary();
pessoa.bio();
