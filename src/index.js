
document.addEventListener('DOMContentLoaded', function() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let myFilter = document.getElementById('breed-dropdown')

console.log('%c HI', 'color: firebrick')


dogObj = fetch(imgUrl)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    myJson['message'].forEach(function(img) {
        let ul = document.getElementById("dog-image-container")
        let li = document.createElement('li')
        let image = document.createElement('img')
        image.src = img
        image.style.width = "40%"
        li.appendChild(image)
        ul.appendChild(li)
    });
  });

  dogBreed = fetch(breedUrl)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
      console.log(myJson)
    Object.keys(myJson.message).forEach(function(breed) {

        let ul = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.textContent = breed
        li.addEventListener('click', changeColor)
        ul.appendChild(li)
    });
  });

  function changeColor(event) {
     event.target.style.color = "blue"
  }

   //Filter
  myFilter.addEventListener('input', breedFilter)
  function breedFilter(e) {
    let dogArray = document.querySelectorAll('#dog-breeds li')
    console.log(myFilter.value)

      dogArray.forEach(function(dog) {
        if(dog.textContent.split('')[0] === myFilter.value || myFilter.value === "all" ) {
            dog.style.display = "block"
        } else {
            dog.style.display = "none"
        } 
      })
  }
})