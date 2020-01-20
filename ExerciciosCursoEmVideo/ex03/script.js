function verificar(){
    var s = window.document.getElementById('start')
    var s1 = Number(s.value)
    var e = window.document.getElementById('end')
    var e1 = Number(e.value)
    var p = window.document.getElementById('pace')
    var p1 = Number(p.value)
    var res = window.document.getElementById('res')
    if (s.value.length == 0 || e.value.length == 0 || p.value.length == 0){
        window.alert('Por favor digite um numero para inciar!')
        res.innerHTML =`Impossivel contar`
    } else {
        res.innerHTML = `Contando: </br>`
        if (p1 <=0){
            window.alert('Passo invalido, considerando passo 1!')
            p1 = 1
        }
        if (s1 < e1){
            for (c = s1; c <= e1 ; c += p1){
            res.innerHTML+= ` ${c} \u{1F449}`
            }
        } else {
            for (c = s1; c>= e1; c -= p1){
                res.innerHTML+= `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
       
}
