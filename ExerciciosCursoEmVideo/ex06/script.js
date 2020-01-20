function parimpar(n){
    if(n%2==0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let res = parimpar(7)
console.log(res)

console.log(parimpar(250))

function soma (n1=0, n2=0){

    return n1 + n2
}
console.log(soma(7, 10))

// Fatorial

function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat*=c
    } return fat
}
console.log(fatorial(6)) 