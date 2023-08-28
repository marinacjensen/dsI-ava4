function calculaSalLiq(sal_bruto) {
    const inssVal = 0.11; // 11%
    // Cálculo do INSS
    const inss = sal_bruto * inssVal;

    // Cálculo do IRPF
    let salarioBase = sal_bruto - inss;

    let irpf;
    if (salarioBase <= 1903.98) {
        irpf = 0;
    } else if (salarioBase <= 2826.65) {
        irpf = salarioBase * 0.075;
    } else if (salarioBase <= 3751.06) {
        irpf = salarioBase * 0.15;
    } else if (salarioBase <= 4664.68) {
        irpf = salarioBase * 0.225;
    } else {
        irpf = salarioBase * 0.275;
    }

    const sal_liq = sal_bruto - inss - irpf;

    return sal_liq.toFixed(2);
}

module.exports = { calculaSalLiq };