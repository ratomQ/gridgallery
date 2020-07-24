$ = {}

$.modal = {}


//Elements

const modalWindows = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const modalContent = document.querySelector('.modal-content')
const closeButton = document.querySelector('.close-button')

//Functions

$.modal.open = imgSrc =>
{
    const img = document.createElement('img')
    img.src = imgSrc
    img.classList.add('modal-image')
    modalContent.appendChild(img)

    modalWindows.classList.add('open')

    modalOverlay.addEventListener('click', $.modal.close)
    closeButton.addEventListener('click', $.modal.close)
}

$.modal.close = event =>
{
    event.stopPropagation()

    if (event.target.dataset.overlay === "overlay" || event.target.dataset.button === "close-button") 
    {
        modalContent.querySelector('.modal-image').remove()

        modalWindows.classList.remove('open')

        modalOverlay.removeEventListener('click', $.modal.close)
        closeButton.removeEventListener('click', $.modal.close)
    }
}