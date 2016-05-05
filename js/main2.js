

/*Esta funcion hace que al seleccionar
la checkbox se tache la palabra*/
function updateItemStatus() {
  var cbId = this.id.replace ("cb_","");
  var itemText = document.getElementById("item_" + cbId);
  
  if(this.checked){
    itemText.className = "checked"; 
  }else{ 
   itemText.style.textDecoration = "none";
  }
}

/*Funcion para agregar una lista con 
un checkbox*/
function addNewItem(list, itemText){
  totalItem++;
  var listItem = document.createElement("li");
  
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "cb_" + totalItem;
  checkbox.onclick = updateItemStatus; 
  
  var span = document.createElement ("span");
  span. id = "item_" + totalItem; 
  span.innerText = itemText;
  
  listItem.appendChild(checkbox);
  listItem.appendChild(span);

  list.appendChild(listItem);
}

//BOTON
var inItemText = document.getElementById("inItemText"); 
inItemText.focus()

var btnNew = document.getElementById('btnAdd');
btnNew.onclick=function(){
 
  var itemText = inItemText.value;

  if (itemText =="" || itemText == " "){
    return false;
  }
  addNewItem(document.getElementById("todoList"), itemText);
inItemText.focus();
inItemText.select();
}
  
var totalItem = 0
    
  