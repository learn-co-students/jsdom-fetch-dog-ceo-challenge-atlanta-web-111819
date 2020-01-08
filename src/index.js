console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    let dogBreeds = []
    const breeds = document.getElementById("dog-breeds");
    
    let filterChoice = document.getElementById('breed-dropdown')

    filterChoice.addEventListener('input', filterBreeds)

    function getImages(json){
        let data = json;
        console.log(data);
        const images = document.getElementById("dog-image-container");

        data.message.forEach(function(image){
            let img = document.createElement('IMG')
            img.setAttribute('src', image);
            images.appendChild(img);
        })
    }

    function getBreeds(json){
        let data = json;
        console.log(data);
        // console.log(Object.keys(data.message))

        dogBreeds = Object.keys(data.message);
        renderBreeds(dogBreeds ,breeds);

    }

    function changeColor(event){
        let target = event.target
        if(target.style.color !== 'blue'){
            target.style.color = 'blue';
        }else{
            target.style.color = 'black';
        }
        
    }

    function filterBreeds(event){
        console.log("filtering")
        console.log(event.target.value)
        let char = event.target.value;
        removeBreeds(breeds);
        let filBreeds = dogBreeds.filter(breed => breed.charAt(0) === char)
        renderBreeds(filBreeds, breeds);
    }

    function removeBreeds(breeds){
        while(breeds.children.length){
            breeds.querySelector(".breed-item").remove();

        }
    }

    function renderBreeds(array, breeds){
        array.forEach(function(breed){
            let li = document.createElement('li')
            li.textContent = breed
            li.setAttribute("class", "breed-item")
            li.addEventListener('click', changeColor)
            breeds.appendChild(li)
        })
    }

   fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => getImages(json));

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => getBreeds(json));


})
