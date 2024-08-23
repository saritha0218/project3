let item = document.getElementById("input");
let add = document.getElementById("list");
  
function add_item() {

  if(item.value != ""){
    let make_li = document.createElement("li");
    make_li.appendChild(document.createTextNode(item.value));
 
    let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        make_li.appendChild(editButton);
        editButton.style.margin="0px 55px";
        editButton.style.padding="10px";
        editButton.style.borderRadius="8px"; 
        editButton.style.backgroundColor="rgb(214, 136, 154)";
        editButton.style.fontWeight="bold";
        editButton.style.fontSize="18px";

    let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        make_li.appendChild(deleteButton);
        deleteButton.style.padding="10px 20px";
        deleteButton.style.borderRadius="8px";
        deleteButton.style.backgroundColor="red";
        deleteButton.style.fontWeight="bold";
        deleteButton.style.fontSize="18px";

     add.appendChild(make_li); 
     item.value = "" 

     editButton.onclick = function() {
      let newValue = prompt("Edit the item:", make_li.firstChild.textContent);
      if (newValue !== null && newValue.trim() !== "") {
          make_li.firstChild.textContent = newValue;
      }
    }

     deleteButton.onclick = function(){
    make_li.parentNode.removeChild(make_li);
      }
  }
  else{
      alert("plz add a value to item");
  }
 }

 
    