/*
let num = [5, 8, 3]
console.log(num)
num[10] = 6
console.log(num)
num.push(55)
console.log(num.length)
console.log(num)

console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(var pos = 0; pos < num.length; pos ++){
    console.log(num[pos])
}*/

let valores = [8, 1, 7, 4, 2, 9] 

/*

for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

*/

for(let x in valores){
    console.log(valores[x])
}
console.log(valores.indexOf(4))