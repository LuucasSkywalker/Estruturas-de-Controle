// ESTRUTURAS DE CONTROLE

// Funções CONSTRUTORAS 

/*
Em JavaScript, ( Number ) é um objeto que permite trabalhar com valores numéricos. 
Ele pode ser usado tanto como um tipo primitivo quanto como um objeto.
Em JavaScript, ( Number.prototype ) é uma propriedade do construtor Number que 
permite adicionar métodos e propriedades a todos os objetos Number1. (prototype) é 
um mecanismo pelo qual objetos herdam propriedades e métodos uns dos outros.
Em Number Isso significa que qualquer instância de Number herdará esses métodos e propriedades.
Por exemplo, você pode adicionar um método personalizado a Number.prototype 
para calcular a metade de um número:

*/ 
Number.prototype.metade = function (){
    return this   / 2
};
const numero = 200
console.log(numero.metade())

// -------------------------------------------------- . . .
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const NotasFacul = function(notasF){
    if (notasF.entre(9, 10)){
       return console.log('Excelente, voçê está de parabéns')
    } else if (notasF.entre(8, 8.99)){
       return console.log('parabéns pela nota')
    } else if (notasF.entre(6, 7.99)){
        return console.log('parabéns, continue se esforçando')
    } else {
    console.log('reprovado, estude mais !')
    }
}
NotasFacul(2)

/*Em JavaScript, o prototype é um mecanismo pelo qual objetos herdam
 propriedades e métodos uns dos outros. Cada função construtora tem 
 uma propriedade chamada prototype, que é usada para adicionar 
 métodos e propriedades que serão compartilhados por todas as 
 instâncias criadas por essa função
 Herança: Todos os objetos em JavaScript herdam de um protótipo. 
 Por exemplo, objetos de data herdam de Date.prototype, 
 e objetos de array herdam de Array.prototype.
Adição de métodos: Você pode adicionar novos métodos a um construtor 
de objetos usando a propriedade prototype. Por exemplo:
JavaScript
 */ 

//  ------------SWITCH É UMA SELEÇÃO MULTIPLA------- . . .
const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
            return console.log('case 10')
            break
            case 9:
                return console.log('case 9')
                break
                case 8:
                    return console.log('case 8')
                    break
                    case 7:
                        return console.log('case 7')
                        break
                        case 6:
                            return console.log('case 6')
                            break
                            default:  //   caso não execute nenhum bloco add( default ) 
                                return console.log('nota inválida')
    }
}
imprimirResultado(6)