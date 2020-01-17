function verificar(){
    var s = window.document.getElementById('start')
    var s1 = Number(s.value)
    var e = window.document.getElementById('end')
    var e1 = Number(e.value)
    var p = window.document.getElementById('pace')
    var p1 = Number(p.value)

    for ( var c = s1 ; c <= e1 ; c += p1){
        console.log(c)
    }
}