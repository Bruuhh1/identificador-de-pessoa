function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    //Verifica se o input está vazio ou se é maior que o ano
    if ( fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // Calcula idade
        var img = document.createElement('img')//cria um elemento img
        img.setAttribute('id', 'foto')// cria um id com valor foto
        var genero = ''//Começa vazio e verifica a opção

        if ( fsex[0].checked ){//Se caixa 0 estiver marcada
            genero = 'Homem'
            if( idade >= 0  && idade < 12){//idade entre 0 e 10
                //criança
                img.setAttribute('src', 'homemcrianca.jpg')
            } else if( idade < 21){
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if ( idade < 55){
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            }
        } else{
            genero = 'Mulher'
            if( idade >= 0  && idade < 12){//idade entre 0 e 10
                //criança
                img.setAttribute('src', 'mulhercrianca.jpg')
            } else if( idade < 21){
                //jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if ( idade < 55){
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}