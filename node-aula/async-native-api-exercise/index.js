// Usando a API Nativa do Node de File System 
// (writeFile e writeFileSync) criei 5 arquivos 
// .txt de forma assíncrona e 5 de forma síncrona.


const fs = require('fs');
const path = require('path')

console.log(path.dirname(__dirname))


const numberFiles = 5;

Array(numberFiles).fill(0).forEach((el,index) => {
    fs.writeFile(`file${index+1}`,`File number ${index+1}`,(err) => {
        (err!=null) ?  console.log("Can't create the files!") : console.log(`File nº${index+1} created!`) 
    })
    
})