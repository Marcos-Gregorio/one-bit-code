let medidaPadrao= parseFloat(prompt('Digite o valor em metros,para realizarmos a oeração:'))
let medidaDesejada= parseInt(prompt('Escolha o numero,que representa a medida que o senhor queira converte.\n1.milimetro(mm)    2.centimetro(cm)    3.decimetro(dm)\n4.decâmetro(dam)   5.hectôetro(hm)   6.quilômetro(qm)'))

let medidaOperaca 
switch (medidaDesejada) {
    case 1:
        medidaOperaca = medidaPadrao*1000
        alert(`Conversão realizada com sucesso!\nMedida em metros:${medidaPadrao}   Medida em milímetros:${medidaOperaca}`)
        break;
    case 2:
        medidaOperaca = medidaPadrao*100
        alert(`Conversão realizada com sucesso!\nMedida em metros:${medidaPadrao}   Medida em centimetro:${medidaOperaca}`)
        break;
    case 3:
        medidaOperaca = medidaPadrao*10;
        alert(`Conversão realizada com sucesso!\nMedida em metros:${medidaPadrao}   Medida em decímetro:${medidaOperaca}`)
        break;
    case 4:
        medidaOperaca=medidaPadrao/10;
        alert(`Conversão realizada com sucesso!\nMedida em metros:${medidaPadrao}   Medida em decâmetro:${medidaOperaca}`)
        
        break;
    case 5:
        medidaOperaca = medidaOperaca/100
        alert(`Conversão realizada com sucesso!\nMedida em metros:${medidaPadrao}   Medida em decâmetro:${medidaOperaca}`)
        
        break;
    case 6:
        medidaOperaca=medidaOperaca/1000
        alert(`Conversão realizada com sucesso!\nMedida em metros:${medidaPadrao}   Medida em quilômetro:${medidaOperaca}`)
        
        break;
    default:
        alert('Opção Invalida.')
        break;
}