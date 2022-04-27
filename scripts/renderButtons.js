import renderToDom from "./renderToDom.js";


const renderButtons = () => {
  let domString = ""; 
  domString = 
    `<div class="buttonContainer">
      <button id="cat-btn" type="button" class="btn btn-primary">Cat</button>
      <button id="dog-btn" type="button" class="btn btn-primary">Dog</button>
      <button id="dino-btn" type="button" class="btn btn-primary">Dino</button>
      <button id="all-btn" type="button" class="btn btn-primary">All</button>
    </div>
    `; 
  renderToDom("#filter-btns", domString)
}

export default renderButtons; 
