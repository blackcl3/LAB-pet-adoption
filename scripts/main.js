import pets from "./data.js"
import renderCards from "./renderCards.js";
import renderButtons from "./renderButtons.js";
import renderForm from "./renderForm.js";
import addeventlisteners from "./addEventListeners.js";
// rewrite form html to add form using function

const startApp = (array = pets) => {
  renderCards(array)
  renderForm()
  renderButtons()
  addeventlisteners()
}

startApp()
