import model from './model.js';
import view from './view.js';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async addItem () {
    let value = view.getInputValue();
    await model.addItemData(value);
    return view.renderList(model.list);
  }

  async deleteItem(e) {
    let itemId = e.target.id;
    await model.removeItemData(itemId);
    return view.renderList(model.list)
  }
}

const controller = new Controller(model, view);

export default controller