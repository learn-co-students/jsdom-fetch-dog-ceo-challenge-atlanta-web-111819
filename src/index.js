console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const allBreeds = []

function createImages(json) {
    json.message.forEach(element => {
        const parent = document.querySelector('#dog-image-container')
        const img = document.createElement('img')

        img.src = element

        parent.appendChild(img)
    });
}

function addBreeds(json) {
    for (breed in json.message) {
        allBreeds.push(breed)
        showBreed(breed)
    }
}

function showBreed(breed) {
    const parent = document.querySelector('#dog-breeds')
    const li = document.createElement('li')
    li.textContent = breed
    parent.appendChild(li)
}

document.addEventListener('DOMContentLoaded', function(e) {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => createImages(json))

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => addBreeds(json))

    document.querySelector('#dog-breeds').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.style = 'color: green'
        }
    })

    document.querySelector('#breed-dropdown').addEventListener('input', function(e) {
        const breeds = allBreeds.filter(function(breed, index, array) {
            return breed.startsWith(e.target.value)
        })

        document.querySelector('#dog-breeds').innerHTML = ""

        for (breed of breeds) {
            showBreed(breed)
        }
    })
})