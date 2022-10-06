
function carregar(){
var msg = document.getElementById('msg')    
var img = document.getElementById('imagem')
var horario = new Date()
var atual = horario.getHours()

msg.innerHTML = `Agora são ${atual} Horas`

    if(atual >= 6 && atual < 12){
        
        boa.innerHTML = "Bom dia!"
        img.src = 'manha.png'
        document.body.style.background = '#e28135'
    } else if(atual >= 12 && atual < 18){
        
        boa.innerHTML = "Bom Tarde!"
        img.src = 'tarde.png'
        document.body.style.background =   '#a6aeb9'

    } else {
        
        boa.innerHTML = "Boa Noite!"
        img.src = 'noite.png'
        document.body.style.background = '#14253f'

    }

}