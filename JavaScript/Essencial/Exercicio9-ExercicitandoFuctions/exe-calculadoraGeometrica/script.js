alert("Bem vindo a calculadora geométrico")
let chooseOptions,base,baseMa,baseMe,baseRet,alturaTra,lado,raio
while(chooseOptions !== 6){
 chooseOptions = parseInt(prompt('Escolha algumas das opções abaixos:\n1.Area do triangulo\n2.Area do retangulo\n3.Area do quadrado\n4.Area do trapézio\n5.Area do circulo.\n6.Sair'))
    switch (chooseOptions){
        case 1:
             base = parseFloat(prompt("Digite o valor da base do tringulo:"));
             altura= parseFloat(prompt("Digite a altura do triangulo:"))
            areaTri(base,altura)
            break;
        case 2:
             baseRet = parseFloat(prompt("Digita a base do retangulo:"))
             alturaRet = parseFloat(prompt("Digite a altura do retangulo:"))
            areaRet(baseRet,alturaRet)
    
            break;
        case 3:
           lado = parseFloat(prompt('Digite o valor dos lados do quadrado:'))
            areaQua(lado)
    
            break;
        case 4:
             baseMe = parseFloat(prompt("Digite o valor da base menor do trapézio:"))
             baseMa = parseFloat(prompt("Digite o valor da base maior:"))
             alturaTra =parseFloat(prompt("Digite o valor da atura do trapezio:"))
            areaTra(baseMe,baseMa,alturaTra)
    
            break;
        case 5:
             raio = parseFloat(prompt('Digite o valor do raio do circulo:'))
            areaCir(raio)
            break;
        case 6:
            alert('Finalizando a calculadora geométrica..')
            break;
        default:
            alert('opção invalida')
    }

}

function areaTri(base,altura){
    let area = base*altura/2
    return alert(`Base do triangulo:\n${base}\nAltura do tringulo:\n${altura}\nArea total:\n${area}`)
}
function areaRet(base,altura){
    let area = base*altura
    alert(`Base do retangulo:\n${base}\nAltura do retangulo:\n${altura}\nArea total:${area}`)
}
function areaQua(lado){
    let area= Math.pow(lado,2)
    alert(`Tamanho da ladeirais do quadrado:\n${lado}\nArea total:\n${area}`)  
}
function areaTra(baseMe,baseMa,altura){
    let area = (baseMe+baseMa)*altura/2
    alert(`Tamanho da base menos do trapezio:\n${baseMe}\nTamanho da base maior do trapezio:\n${baseMa}\nAltura do trapezio:\n${area}`)
}
function areaCir(raio){
    let area = 3.14 * Math.pow(raio,2)
    alert(`Tamanho do raio do circulo:\n${raio}\nArea Total:${area}`)
}
