// Demonstração de função de primeira ordem, onde podemos utilizar em variaveis, estruturas de dados etc;

function getName() {
    return 'Gabriel Brandini Fonseca';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);