

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

  var listItem = document.createElement("li");    //crear la lista   
  var checkbox = document.createElement("input");  //crea el input
  checkbox.type = "checkbox";         //especifica el input a checbox
  checkbox.id = "cb_" + totalItem;
  checkbox.onclick = updateItemStatus; 
  
  var span = document.createElement ("span");
  span. id = "item_" + totalItem; 
  span.innerText = itemText;

//Parte para remover la lista
  removeAll = document.getElementById('removeAll');  //Remueve toda la lista completa
  
  removeButton = document.createElement('button')
  removeButton.className = 'removeMe';
  removeButton.innerHTML = 'Listo!';
  removeButton.setAttribute('onclick', 'removeMe(this);');
  
  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  list.appendChild(listItem);
  listItem.appendChild(removeButton);

  removeAll.onclick = function () {
  list.innerHTML = '';
};
}
/*Para remover la lista creada*/
function removeMe(item){
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
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