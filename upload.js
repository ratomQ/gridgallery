//Elements
const inputElement = document.getElementById("upload-btn")
const clearButton = document.querySelector('.clear-button')
const gridGallery = document.querySelector('.grid-gallery')

//Adding event listeners
inputElement.addEventListener('change', handleFiles)
clearButton.addEventListener('click', clearImages)
document.addEventListener('click', imageClicked)

//Functions
function handleFiles() 
{
    const fileList = this.files    

    for (let i = 0; i < fileList.length; i++)
    {
        const reader = new FileReader()

        reader.addEventListener('load', addImages)

        reader.readAsDataURL(fileList[i])
    }  
}

function addImages(e)
{
    const gridBox = document.createElement('div')
    gridBox.classList.add('grid-box')

    const img = document.createElement('img')
    img.setAttribute("data-img", 'img')
    img.src = e.target.result

    gridBox.appendChild(img)

    document.querySelector('.grid-gallery').appendChild(gridBox)
}

function clearImages(e)
{
    while (gridGallery.lastElementChild !== null)
    {
        gridGallery.lastElementChild.remove()
    }
}

function imageClicked(event)
{
    if (event.target.dataset.img === 'img')
    {
        const img = event.target
        $.modal.open(img.src)
    }
}