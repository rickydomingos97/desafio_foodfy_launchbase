

const modalOverlay = document.querySelector('.modal-overlay')
let cards = document.querySelectorAll('.card')

let imagens = document.querySelectorAll('.small_image')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('#modal_image')
let modalCont = document.querySelector('.modal-overlay')



for(let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')

        
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})

for (let i = 0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src', srcVal)
    })
}

const nomeDaReceita = card.getElementsByTagName("h4")[0].card_info
modalOverlay.querySelector('h4').innerHTML = `${nomeDaReceita }`
m