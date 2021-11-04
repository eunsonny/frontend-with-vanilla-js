class Item {
  constructor(value) {
    this.id = `item${model.list.length}`;
    this.content = value;
    this.checked = false;
  }
}
class Model {
  constructor() {
    this.list = [
      { content: '세수하기', checked: false },
      { content: '이 닦기', checked: false },
    ]
  }

  addItemData(value) {
    let newItem = new Item(value);
    this.list.push(newItem);
  }

  removeItemData(itemIndex) {
    this.list.splice(itemIndex, 1);
  }

  editItemData(item, itemIndex) {
    this.splice(itemIndex, 1, item);
  }

  checkItem(itemIndex) {
    this.list[itemIndex].checked = true;
  }
}

const model = new Model();

export default model;
