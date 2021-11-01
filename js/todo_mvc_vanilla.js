const input = document.querySelector("input");

const addItem = () => {
  const toDoList = document.getElementById("toDoList");
  const itemValue = input.value;
  let makeLi = document.createElement("li");

  toDoList.appendChild(makeLi);
  let lastItem = toDoList.lastChild;

  lastItem.className = "listItem";
  lastItem.innerHTML = itemValue;
}




const init = () => {

}

init();