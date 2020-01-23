let array = [];
let number, sel, n

function capturador(){        
    number = window.document.querySelector('input#number')
    n = Number(number.value)
    res = document.getElementById('res')
    sel = document.getElementById('sel')
    
}


function add(){
    capturador()
    if (array.indexOf(n) != -1 || n.length == 0 || n < 1|| n > 100){
    return alert('Invalid number or existent number on the list!')
    } else {
        array.push(n);
        sel.innerHTML +=`<option value${n}> valor ${n} added! </option>`
    }
}   

function finalizar(){
    nresgistereds = array.le
    res.innerHTML += `A quantidade de numeros registrados foi ${array.length}</br>`
    // Maior numero
    var maior = Math.max(...array)
    res.innerHTML += ` O maior numero é o ${maior}</br>`
    //Menor numero
    var menor = Math.min(...array)
    res.innerHTML += ` O menor numero é o ${menor}</br>`
    // Soma
    
    res.innerHTML += `A soma entre os numeros é`

}
