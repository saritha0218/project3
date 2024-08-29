let item = document.getElementById("input");
let add = document.getElementById("list");

const saveItems = (items) => {
   localStorage.setItem('todoItems', JSON.stringify(items));
}

const getItems = () => {
   return JSON.parse(localStorage.getItem('todoItems')) || [];
}

const renderItems = () => {
  add.innerHTML = '';

  getItems().forEach((text, index) => {
    let make_li = document.createElement("li");
    make_li.appendChild(document.createTextNode(text));

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("bt");
    make_li.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("bt1");
    make_li.appendChild(deleteButton);

    add.appendChild(make_li);

    editButton.onclick = function() {
      let newValue = prompt("Edit the item:", text);
      if (newValue !== null && newValue.trim() !== "") {
          let items = getItems();
          items[index] = newValue;
          saveItems(items);
          renderItems();
      }
    };

    deleteButton.onclick = function(){
      let items = getItems();
      items.splice(index, 1);
      saveItems(items);
      renderItems();
    };
  });
};

function add_item() {
  if(item.value.trim() !== "") {
    let items = getItems(); 
    items.push(item.value.trim());
    saveItems(items);
    renderItems();
    item.value = "";
  }
  else {
    alert("Please add a value to item");
  }
}

document.addEventListener('DOMContentLoaded', renderItems);
