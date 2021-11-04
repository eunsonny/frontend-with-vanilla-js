class Item {
  constructor(value) {
    this.id = model.list.length > 0 ? model.list.length + 1 : 1;
    this.content = value;
    this.checked = false;
  }
}

class Model {
  constructor() {
    this.list = [
      { id: 1, content: '세수하기', checked: false },
      { id: 2, content: '이 닦기', checked: false },
    ]
  }

  addItemData(value) {
    let newItem = new Item(value);
    this.list.push(newItem);
  }

  editItemData(id, updatedText) {
    this.list = this.list.map((item) =>
      item.id === id ? { id: item.id, content: updatedText, checked: item.checked } : item
    )
  }

  deleteItemData(id) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  toggleItem(id) {
    this.list[id].checked = !this.list[id].checked
    // this.list = this.list.map((item) =>
    //   item.id === id ? { id: item.id, content: item.content, checked: !item.checked } : item
    // )
  }
}

const model = new Model();

export default model;
