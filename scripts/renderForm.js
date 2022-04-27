import renderToDom from "./renderToDom.js";

const renderForm = () => {
  let domString = ""; 
  domString = `<form id="add-new-pet-form" class="container form-control form-inline newPetContainer mx-auto align-items-center">
    <h3>Add Your Pet!</h3>
      <div class="row g-3 align-items-center form-group">
        <div class="col-auto">
          <input type="text" id="name" class="form-control" aria-describedby="" placeholder="Pet Name" required>
        </div>
        <div class="col-auto">
          <span id="nameHelpBlock" class="form-text">
            Please enter your pet's name. 
          </span>
        </div>
      </div>
      <div class="row g-3 align-items-center form-group">
        <div class="col-auto">
          <input type="text" id="color" class="form-control" aria-describedby="" placeholder="Pet's Color" required>
        </div>
        <div class="col-auto">
          <span id="nameHelpBlock" class="form-text">
            Please enter your pet's color.  
          </span>
        </div>
      </div>
      <div class="row g-3 align-items-center form-group">
        <div class="col-auto">
          <input type="text" id="imageURL" class="form-control" aria-describedby="" placeholder="Picture of Your Pet" required>
        </div>
        <div class="col-auto">
          <span class="form-text">
            Please include a URL for a picture of your pet. 
          </span>
        </div>
      </div>

      <div class="row g-3 align-items-center form-group">
        <div class="col-auto">
          <input type="text" id="specialSkill" class="form-control" aria-describedby="" placeholder="Pet Special Skill" required>
        </div>
        <div class="col-auto">
          <span id="nameHelpBlock" class="form-text">
            Please include a short description of your pet's skill. 
          </span>
        </div>
      </div>
      <div class="form-group">
        <select id="type" class="custom-select custom-select-sm" required>
          <option selected>Select The Kind of Pet You Have</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="dino">Dino</option>
        </select>
      </div>
      
      <button type="submit" class="btn btn-primary">Submit</button>
  </form>`; 
  renderToDom("#form-container", domString)
}

export default renderForm 
