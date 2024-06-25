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
        situacao = "Muito abaixo do peso";
        classe = "perigo";
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

function adicionarItem() {
    // Obter o texto e a cor do item
    let itemText = document.getElementById("itemText").value;
    let cor = document.querySelector('input[name="cores"]:checked').value;

    // Criar um novo item de lista
    let li = document.createElement("li");
    li.textContent = itemText;
    li.style.color = cor;

    // Adicionar o item à lista
    document.getElementById("lista").appendChild(li);

    // Limpar o campo de texto
    document.getElementById("itemText").value = "";
}

// Adicionar eventos aos botões
document.getElementById("calcular").addEventListener("click", calcularIMC);
document.getElementById("adicionar").addEventListener("click", adicionarItem);
