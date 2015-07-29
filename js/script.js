var ul = document.querySelector('ul');

var form = document.querySelector('#submit');

var itemArray = [];

form.addEventListener('click', function(evt){
    var item = document.querySelector('#toDoItem').value;

    itemArray.push(item);

    var li = e('li', item , {class:"btn"}, {'list-style-type': "none"});

    ul.appendChild(li);

    var label = e('label', null, {class:"label checkbox pull-left"}, {padding: "0 .6em .0", margin:" 0 10px"});
    li.appendChild(label);

    var labelTag = document.querySelector('.label');
    var input = e('input', null, {type:"checkbox", id:"inlineCheckbox"});
    labelTag.appendChild(input);

    var edit = e('button', "Edit", {class:"btn btn-info pull-right", type:"button"}, {margin: " 0 20px"});
    var deleteButton = e('button', "Delete", {class:"btn btn-danger pull-right"});
    li.appendChild(edit);
    li.appendChild(deleteButton);

    evt.preventDefault();

});



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

document.querySelector('h1').addEventListener("click", function (evt) {
    console.log(this);
    console.log(evt);
});






















