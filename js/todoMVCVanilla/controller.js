import model from './model.js';
import view from './view.js';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  // setListEvent = () => {
  //   let newItem = document.getElementById(`list${model.list.length - 1}`)
  //   console.log(newItem)
  //   newItem.addEventListener('click', this.deleteItem)
  // }

  async addItem () {
    let value = view.getInputValue();
    await model.addItemData(value);
    view.renderList(model.list);
    // view.addItem(model.list[model.list.length-1]);
    this.setListEvent();
  }

  async deleteItem(e) {
    console.log('asdfas')
    let itemId = e.target.id;
    await model.removeItemData(itemId);
    return view.renderList(model.list);
  }

  setListEvent = () => {
    let newItem = document.getElementById(`list${model.list.length - 1}`)
    console.log(newItem)
    newItem.addEventListener('click', this.deleteItem)
  }
}

const controller = new Controller(model, view);

export default controller;