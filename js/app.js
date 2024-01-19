let result = document.getElementById('input-data');
let reset = document.getElementById('btn-clear');
let backspace = document.getElementById('btn-backspace');
let equals = document.getElementById('btn-equals');
let numbers = document.querySelectorAll('.number');
let signeds = document.querySelectorAll('.sign');

// Imprimir numeros
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        result.value += e.target.textContent;
    })
})

signeds.forEach((signed) => {
    signed.addEventListener('click', (e) => {
        operandoa = result.value;
        operacion = e.target.textContent;
        clear();
    })
})


reset.onclick = () => reReset();

backspace.onclick = () => {
    result.value = result.value.substring(0, result.value.length - 1);
};


equals.onclick = () => {
    operandob = result.value;
    resolve();
};

const clear = () => {
    result.value = "";
};

const reReset = () => {
    result.value = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
};

const resolve = () => {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            if(operandob < 0) 
                res = 'infinite';
            else 
                res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case '%':
            if(operandob < 0)
                res = 'Error';
            res = (parseFloat(operandoa) / parseFloat(operandob)) * 100;
            break;
    }
    reReset();
    result.value = res;
};
