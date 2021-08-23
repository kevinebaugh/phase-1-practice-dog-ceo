const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedsArray =  []
const breedDropdown = document.querySelector("#breed-dropdown")
const breedList = document.querySelector("#dog-breeds")

breedDropdown.addEventListener("change", filterBreeds)

function filterBreeds(event) {
  const filteredBreeds = Object.keys(breedsArray).filter(breed => breed.startsWith(event.target.value))
  breedList.innerHTML = ""
  filteredBreeds.forEach(breed => {
    breedLi = document.createElement("li")
    breedLi.innerText = breed
    breedLi.classList.add("breed-li")
    breedLi.addEventListener("click", changeColor)
    breedList.appendChild(breedLi)
  })
}

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    data.message.forEach(url => {
      img = document.createElement("img")
      img.src = url
      document.querySelector("#dog-image-container").appendChild(img)
    })
  })

function changeColor(event) {
  event.target.style.color = "pink"
}

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    breedsArray = data.message
    for (const breed in breedsArray) {
      breedLi = document.createElement("li")
      breedLi.innerText = breed
      breedLi.classList.add("breed-li")
      breedLi.addEventListener("click", changeColor)
      breedList.appendChild(breedLi)
    }
  })
