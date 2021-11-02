class List {
  constructor() {
    this.list = []
  }

  addItem(item) {
    this.list.push(item);
  }

  removeItem(itemIndex) {
    this.list.splice(itemIndex, 1);
  }

  editItem(item, itemIndex) {
    this.splice(itemIndex, 1, item);
  }

  checkItem(itemIndex) {
    this.list[itemIndex].cheched = true;
  }
}

class Item {
  constructor(content) {
    this.content = content;
    this.checked = false;
  }
}

export {
  
}