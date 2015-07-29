var ul = document.querySelector('ul');

var form = document.querySelector('#submit');

var itemArray = [];

var totalItems = 0;

form.addEventListener('click', function(evt){
    totalItems++;

    var item = document.querySelector('#toDoItem').value;

    itemArray.push(item);

    var li = e('li', null , {id:'li'+totalItems}, {'list-style-type': "none", 'border-bottom': '1px  solid rgb(238, 238, 238)', 'height': '42px', 'padding-top': '3px', 'padding-bottom': '3px'});

    ul.appendChild(li);

    var p = e('p', item, {id:'p'+totalItems}, {'display':"inline"});
    var input = e('input',null, {type:"checkbox", id:"inlineCheckbox"+totalItems, name:"checkbox"}, null);
    var edit = e('button', "Edit", {id: 'edit'+totalItems, class:"btn btn-info pull-right", type:"button"}, {margin: " 0 20px"});
    var deleteButton = e('button', "Delete", {id: 'delete'+totalItems, class:"btn btn-danger pull-right"});

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(edit);
    li.appendChild(deleteButton);

    input.onclick = itemComplete;
    deleteButton.onclick = itemDelete;
    edit.onclick = editItem;

    evt.preventDefault();



});

function itemComplete(){
    var check = this.id.replace("inlineCheckbox", "");
    var btn = document.querySelector('#edit'+check);
    var strikethrough = document.querySelector('#p'+check);

    if(this.checked){
        
        btn.setAttribute('disabled', 'disabled');
        strikethrough.style.textDecoration = 'line-through';
    } else {
        strikethrough.style.textDecoration = 'none';
        btn.removeAttribute('disabled');
    }
}

function itemDelete(){
    var d = confirm("Are you sure you want to delete this item");
    var deleteBtn = this.id.replace("delete", "");

    if(d){
        var liContainer = document.querySelector('ul');
        var deleteItem = document.querySelector('#li'+deleteBtn);
        liContainer.removeChild(deleteItem);
    } else {
        alert("Item not canceled.")
    }

}

function editItem(){
    var newText = prompt("Please enter the new item.");
    var itemEdit = this.id.replace('edit', "");
    var editP = document.querySelector('#p'+itemEdit);

    editP.innerText = newText;

}

function e(elementType, text, attributes, styles) {
    var element = document.createElement(elementType);
    element.textContent = text || "";

    for (var attr in attributes) {
        if(attributes.hasOwnProperty(attr)) {
            element.setAttribute(attr, attributes[attr]);
        }
    }

    for(var style in styles) {
        if (styles.hasOwnProperty(style)) {
            element.style[style] = styles[style];
        }
    }

    return element;
}

// document.querySelector('h1').addEventListener("click", function (evt) {
//     console.log(this);
//     console.log(evt);
// });






















