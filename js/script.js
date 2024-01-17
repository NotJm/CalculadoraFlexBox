export const sum = (x, y) => x + y;
export const res = (x, y) => x - y;
export const mul = (x, y) => x * y;
export const div = (x, y) => {
    if (y < 0) 
        return "Operacion no valida";
    else
        return x / y;
}
