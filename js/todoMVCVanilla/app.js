import model from './model.js';
import view from './view.js';
import controller from './controller.js';


const addButton = document.getElementById('add_button');
const deleteButtons = document.getElementsByClassName('delete_button');

const init = async () => {

  view.renderList(model.list);
  addButton.addEventListener('click', controller.addItem);
  console.log('inti')

  // console.log(deleteButtons)

};

init();