// Exemplo de Closure
// Nesse exemplo esta tranquilo determinar a origem da variavel exemplo, mas devemos evitar algumas coisas
// Por exemplo, no return function o ideal seria trabalhar com função pura (onde a variavel entra como parametro)

function init() {
    const exemplo = 'Essa variavel';

    return function() {
        console.log('1 - O valor da variavel exemplo é: ${exemplo}.');

        return function() {
            console.log('2 - O valor da variavel exemplo é: ${exemplo}.');

            return function() {
                console.log('3 - O valor da variavel exemplo é: ${exemplo}.');
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

// Poderiamos executar todas as funções numa linha só, com init()()()()