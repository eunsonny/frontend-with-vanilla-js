import model from './model.js';
import view from './view.js';
import controller from './controller.js';


const addButton = document.getElementById('add_button');
const deleteButtons = document.getElementsByClassName('delete_button');

const init = async () => {

  view.renderList(model.list);
  addButton.addEventListener('click', controller.addItem);
  // for (let i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].addEventListener('click', controller.deleteItem);
  // }
  // console.log(deleteButtons)

};

init();