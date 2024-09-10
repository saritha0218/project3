let item = document.getElementById("input");
let add = document.getElementById("list");

const saveItems = (items) => {
   localStorage.setItem('todoItems', JSON.stringify(items));
}

const getItems = () => {
   return JSON.parse(localStorage.getItem('todoItems')) || [];
}

const showItems = () => {
  add.innerHTML = '';

  getItems().forEach((item, index) => {

    let make_li = document.createElement("li");

    let textSpan = document.createElement("span");
    textSpan.textContent = item.text;

    if (item.completed) {
          textSpan.classList.add('completed'); 
    }

    make_li.appendChild(textSpan);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("bt");
    make_li.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("bt1");
    make_li.appendChild(deleteButton);

    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("bt2");
    make_li.appendChild(completeButton);

    add.appendChild(make_li);

    editButton.onclick = function() {
      let newValue = prompt("Edit the item:", item.text);
      if (newValue.trim() !== "") {
          let items = getItems();
          items[index].text = newValue;
          saveItems(items);
          showItems();
      }
    };

    deleteButton.onclick = function(){
      let items = getItems();
      items.splice(index, 1);
      saveItems(items);
      showItems();
    };

    completeButton.onclick = function(){
      let items = getItems();
            items[index].completed = !items[index].completed; 
            saveItems(items);
            showItems();
    }

  });
};

function add_item() {
  if(item.value.trim() !== "") {
    let items = getItems(); 
    items.push({ text: item.value.trim(), completed: false });
    saveItems(items);
    showItems();
    item.value = "";
  }
  else {
    alert("Please add a value to item");
  }
}

document.addEventListener('DOMContentLoaded', showItems);
