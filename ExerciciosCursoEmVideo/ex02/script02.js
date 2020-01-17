function verificar(){
    // Taking the current Year

    var ano = new Date()
    var year = ano.getFullYear() 

    //Taking the year typed
    var n1 = window.document.getElementById('year') 
    var byear = Number(n1.value) 

    //Calculating the age
    var  age = year - byear
    if (n1.value.length == 0 || age.value > year){
        window.alert('Please check the date typed!')
    } else {
        var fgender = window.document.getElementsByName('gender')
        var defgender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'pciture')
        if (fgender[0].checked){
            gender = 'Homem'
            if (age >=0 && age <18) {
                // Crianca
                img.setAttribute('src', 'youngman.png')
            } else if (age >= 18 && age < 45){
                // adulto
                img.setAttribute('src', 'midman.png')
            } else {
                // Velho
                img.setAttribute('src', 'oldman.png')
            }
        } else if (fgender[1].checked){
            gender = 'Mulher'
            if (age >=0 && age <18) {
                // Crianca
                img.setAttribute('src', 'youngwoman.png')
            } else if (age >= 18 && age < 45){
                // adulto
                img.setAttribute('src', 'midwoman.png')
            } else {
                // Velho
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        res. innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
    }






    
    
