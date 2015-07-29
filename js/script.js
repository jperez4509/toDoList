var ul = document.querySelector('ul');

var form = document.querySelector('#submit');

var itemArray = [];

form.addEventListener('click', function(evt){
    var item = document.querySelector('#toDoItem').value;

    itemArray.push(item);

    var li = e('li', null , null, {'list-style-type': "none", 'border-bottom': '1px  solid rgb(238, 238, 238)', 'height': '42px', 'padding-top': '3px', 'padding-bottom': '3px'});

    ul.appendChild(li);

    var p = e('p', item, null, {'display':"inline"});
    var input = e('input',null, {type:"checkbox", id:"inlineCheckbox", name:"checkbox"}, null);
    var edit = e('button', "Edit", {class:"btn btn-info pull-right edit", type:"button"}, {margin: " 0 20px"});
    var deleteButton = e('button', "Delete", {class:"btn btn-danger pull-right"});

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(edit);
    li.appendChild(deleteButton);

    itemComplete();

    evt.preventDefault();



});

function itemComplete(){
    var editButton = document.querySelector('.edit');

    var inputSelect = document.getElementsByName("checkbox");

    for (var i = 0; i < inputSelect.length; i++) {
        var input = inputSelect[i];
        if (input.checked) {
            console.log('hello');
        }
    }

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






















