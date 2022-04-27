import renderToDom from "./renderToDom.js";

const renderCards = (array) => {
  let domString = ""; 
  for (const item of array) {
     domString += 
      `<div class="card">
        <div class="card-header card-title text-secondary">
        <h4>${item.name}</h4>
        </div>
        <img src="${item.imageUrl}" class="card-img-top rounded-1" alt="${item.type}" onerror="this.onerror=null;this.src='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'">
        <div class="card-body">
          <p>${item.color}</p>
          <p class="card-text">Special Skill: ${item.specialSkill}</p>
        </div>
        <div class="card-footer ${item.type}-footer">
          <p class="text-muted">${item.type}</p>
        </div>
        <button id="delete--${item.id}" type="button" class="btn btn-danger">Delete</button>
      </div>`
  }
  renderToDom("#cardContainer", domString)
}


export default renderCards; 
