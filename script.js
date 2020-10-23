function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var pegaAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(pegaAno.value.length == 0 || pegaAno.value > anoAtual) {
        window.alert('[ERRO] Dados informados incorretos!')
    }else {
        var sex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(pegaAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade <= 5) {
                img.setAttribute('src', './imagens/bebeM.jpg')
            } else if(idade <= 12) {
                img.setAttribute('src', './imagens/criM.jpg')
            } else if(idade <= 25) {
                img.setAttribute('src', './imagens/adoM.jpg')
            } else if(idade <= 50) {
                img.setAttribute('src', './imagens/adultoM.jpg')
            } else {
                img.setAttribute('src', './imagens/idoso.jpg')
            }            
        } else if (sex[1].checked) {
            genero = 'Feminino'
            if(idade >= 0 && idade <= 5) {
                img.setAttribute('src', './imagens/bebeF.jpg')
            } else if(idade <= 12) {
                img.setAttribute('src', './imagens/criF.jpg')
            } else if(idade <= 25) {
                img.setAttribute('src', './imagens/adoF.jpg')
            } else if(idade <= 50) {
                img.setAttribute('src', './imagens/adultoF.jpg')
            } else {
                img.setAttribute('src', './imagens/idosa.jpg')
            }            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o genero: ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
    }

   

}
