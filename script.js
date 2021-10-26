
let num = +prompt("Введите число");
let minDevisor = 0;

if (num <= 1) {
    console.log("NaN");
} else {
    for (let i = 2; i < num; i++) {
        if (num%i === 0) {
            minDevisor = i;
            console.log(`Минимальный делитель: ${minDevisor}`);
            break;
        } 
}
if (minDevisor === 0) {
console.log(`Число ${num} простое, минимальный делитель - само число.`);
}
}
