function pow(x, n) {
    if (n < 1 || (n % 1 !== 0)) {
        console.log('Поддерживаются только натуральные целые числа')
        return 0;
    }
    return x ** n;
}