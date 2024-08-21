let item = document.getElementById("input");
let add = document.getElementById("list");
  
function add_item() {

  if(item.value != ""){
    let make_li = document.createElement("li");
    make_li.appendChild(document.createTextNode          (item.value));
 
     add.appendChild(make_li); 
     item.value = "" 
     make_li.onclick = function(){
    this.parentNode.removeChild(this);
      }
  }
  else{
      alert("plz add a value to item");
  }
 }

 
    