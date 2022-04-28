
import renderCards from "./renderCards.js";
import pets from "./data.js";


const addeventlisteners = () => {
  // filter buttons event listeners
  const filterButtons = document.querySelector("#filter-btns"); 
  
  filterButtons.addEventListener("click", (e) => {
    if(e.target.id === "dog-btn") {
      const newArr = pets.filter((pet) => pet.type === "dog")
      renderCards(newArr)
    } else if (e.target.id === "cat-btn") {
      const newArr = pets.filter((pet) => pet.type === "cat")
      renderCards(newArr)
    } else if (e.target.id === "dino-btn") {
      const newArr = pets.filter((pet) => pet.type === "dino")
      renderCards(newArr)
    } else if (e.target.id === "all-btn") {
      renderCards(pets)
    } 
  }); 
  // event listeners for form
  const form = document.querySelector("#add-new-pet-form"); 
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      const newPetObject = {
        id: pets[pets.length-1].id+1, 
        name: document.querySelector("#name").value,
        color: document.querySelector("#color").value,
        specialSkill: document.querySelector("#specialSkill").value,
        type: document.querySelector("#type").value,
        imageUrl: document.querySelector("#imageURL").value
    }; 
    pets.push(newPetObject); 
    renderCards(pets); 
    form.reset()

    }); 
    
   const deletePet = document.querySelector("#cardContainer") 
   deletePet.addEventListener("click", (e) => {
     console.log(e.target.id)
    if (e.target.id.includes('delete')) {
      const [method, petId] = e.target.id.split("--"); 
      const index = pets.findIndex((pet) => pet.id === parseInt(petId)); 
      pets.splice(index, 1); 
      renderCards(pets)
    } 
   }); 
   
}

export default addeventlisteners; 
