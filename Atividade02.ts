import readlinkSync = require('readline-sync')
import { Stack } from '../pilha/Stack'

const pilha = new Stack<string>();
let escolha; 
let continua = '0'

while(continua !== '0'){

    console.log('\n**************************')
    console.log('1 - Adicionar Livros na Pilha');
    console.log('2 - Listar todos os Livros');
    console.log('3 - Retirar livro da Pilha');
    console.log('0 - Sair');
    console.log('\n**************************');
    escolha = readlinkSync.questionInt('\nEntre com a opção desejada: ');

    switch(escolha){

        case 1: 
        let nome = readlinkSync.question("Digite o nome do Livro: ")
        pilha.push(nome); 
        pilha.printStack(); 
        console.log("O livro foi adicionado")
        break;

        case 2: 
        console.log("Lista de todos os livros: ");
        pilha.printStack()
        break;

        case 3: 
        let remover = pilha.pop()

        if(remover){
            console.log("Livro removido da Pilha")
        }
        else(
            console.log("Pilha está vazia")
        )
        break;

        case 0: 
        console.log("Saindo do Menu")
        process.exit();

        default:
            console.log("Opçao Invalida!! Tente Novamente!!")

    }


}