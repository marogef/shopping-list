//- first define the main parts of the JS code
//function to add the item, add the items
function addItem()
//get the value of the input box
var itemValue = $('#shopping-list-entry').val();

//validate
if (itemValue.length === 0) {
    alert('value is empty');
} else {
    //dynamicaly create one row inside the shopping list
    var row = '';
    row += '<li>';
    row += '<span class="shopping-item">' + itemValue + '</span>';
    row += '<div class="shopping-item-controls">';
    row += '<button class="shopping-item-toggle">';
    row += '<span class="button-label">check</span>';
    row += '</button>';
    row += '<button class="shopping-item-delete">';
    row += '<span class="button-label">delete</span>';
    row += '</button>';
    row += '</div>';
    row += '</li>';

    //add each row
    $('.shopping-list').append(row);

    //empty the input box
    $('#shopping-list-entry').val('');
}
}

//function to delete item, delete the items
function deleteItem() {
    //remove the li when clicking
    $(this).closest('li').remove();
}

//function to check item, check the items
function checkItem() {
    //add the right action
    $(this).parent().parent().toggleClass('shopping-item__checked');


}
/*

Milestone two: start complete the functions definitions and test them line by line in your app.js
- inside each functions write in plain english what are the steps to follow
-complete one step at a time and test it[11/24/16, 9:28:59 PM] Marius Banea: /* Debugging strategies
$(document).ready(function () {
    /*on click on the "#js-shopping-list-form button" button activate function called addItem()*/
* * //


$(document).ready(function () {
    /*on click on the "#js-shopping-list-form button" button activate function called addItem()*/
    $('#js-shopping-list-form').submit(function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();

        addItem();
    });
});



//when clicking activate the check item
$(document).on('click', '.shopping-item-toggle', checkItem);

//when clicking activate the delete item
$(document).on('click', '.shopping-item-delete', deleteItem);
