let array = [];
let number, sel, n

function capturador(){        
    number = window.document.querySelector('input#number')
    n = Number(number.value)
    res = document.getElementById('res')
    sel = document.getElementById('sel')
    number.value = ''
    number.focus()
    
    
}


function add(){
    
    capturador()
    if (array.indexOf(n) != -1 || n.length == 0 || n < 1|| n > 100){
        return alert('Invalid number or existent number on the list!')
    } else {
        array.push(n);
        sel.innerHTML +=`<option value${n}> valor ${n} added! </option>`
        res.innerHTML = ''
        
    }
    
    
}   


function finalizar(){
    
    res.innerHTML += `A quantidade de numeros registrados foi ${array.length}</br>`
    // Maior numero
    //var maior = Math.max(...array)
    //res.innerHTML += ` O maior numero é o ${maior}</br>`
    //Menor numero
    //var menor = Math.min(...array)
    //res.innerHTML += ` O menor numero é o ${menor}</br>`

    let maior = array[0];
    let menor = array[0];
    for(var pos in array){
        if (array[pos]> maior){
            maior = array[pos]
        if (array[pos] < menor)
            menor = array[pos]
        }
    }
    res.innerHTML += `O maior valor é ${maior} e o menor é ${menor}.</br>`

    // Soma
    var soma = 0 
    for (i = 0; i < array.length; i ++){
        soma = soma + array[i]
    }
    res.innerHTML += `A soma entre os numeros é ${soma} </br>`
    // media 
    var media = 0
    var media = soma/array.length
    res.innerHTML +=`A media entre os valores é igual a ${media} </br>`

}
