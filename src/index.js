

console.log('%c HI', 'color: firebrick')

function fetchPhoto(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json =>  dogImg(json))
}

function dogImg(json){
    const div = document.querySelector("#dog-image-container")
    json.message.forEach( dogImg => {
        console.log(dogImg)
        const img = document.createElement('img')
        img.src = dogImg
        div.appendChild(img)
    })
}


function fetchBreed(){
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(json => dogBreed(json))
}

function dogBreed(json){
    const select = document.querySelector('#breed-dropdown')
    select.addEventListener('input', breedSort )
    const ul = document.querySelector('#dog-breed')
    breeds = Object.keys(json.message)
    breeds.forEach( breed => {
       const ul = document.querySelector("#dog-breeds")
       const li = document.createElement("li")
       li.innerText = breed
       li.addEventListener('click',function(){
           li.style = "color:red;"
       })
       ul.appendChild(li)
       
    })


}

function breedSort(e){
    

}
































document.addEventListener('DOMContentLoaded', function() {

    

    fetchPhoto()
    fetchBreed()
  })