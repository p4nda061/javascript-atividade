function calcularIMC() {
    // Obter peso e altura dos campos de input
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Calcular o IMC
    let imc = peso / (altura * altura);

    // Determinar a situação e cor
    let situacao = "";
    let classe = "";

    if (imc < 16) {
        situacao = "Muito abaixo do peso";
        classe = "perigo";
    } else if (imc >= 16 && imc < 17) {
        situacao = "Abaixo do peso";
        classe = "alerta";
    } else if (imc >= 17 && imc < 18.5) {
        situacao = "Abaixo do peso";
        classe = "alerta";
    } else if (imc >= 18.5 && imc < 25) {
        situacao = "Peso normal";
        classe = "normal";
    } else if (imc >= 25 && imc < 30) {
        situacao = "Sobrepeso";
        classe = "alerta";
    } else if (imc >= 30 && imc < 35) {
        situacao = "Obesidade I";
        classe = "perigo";
    } else if (imc >= 35 && imc < 40) {
        situacao = "Obesidade II (severa)";
        classe = "perigo";
    } else {
        situacao = "Obesidade III (mórbida)";
        classe = "perigo";
    }

    // Mostrar o IMC e a situação
    document.getElementById("imc").innerHTML = imc.toFixed(2);
    let situacaoElement = document.getElementById("situacao");
    situacaoElement.innerHTML = situacao;
    situacaoElement.className = classe;
}
