function soma(number) {
    let soma= 0;
    for(i = 0; i < number; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            soma += i;
        }
    }
    return soma;
}
console.log(soma(12));
