/********************************************
Step 1 define functions and objects
************************************/

//function to add items
function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");

    //get the value of the input box
    var itemValue = $('#shopping-list-entry').val();

    //check if the logic makes sense -> make sure that you get the value you are adding in the html
    //alert(itemValue);

    //validate
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }

    //if the input is valid ....
    else {
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

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting the value
        $('#shopping-list-entry').val('');
    }
}

//function to check the items
function checkItem() {
    //check if the targeting is working
    //alert("The item is checked");

    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of the parent of it (in our case the LI above the it) and add / remove the "shopping-item__checked" class to it
    $(this).parent().parent().toggleClass('shopping-item__checked');
}

//function to delete the items
function deleteItem() {
    //check if the targeting is working
    //alert("the item is deleted");

    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the closest LI and remove the parent and everything inside it

    $(this).closest('li').remove();
}

/********************************************
Step 2 use functions and objects
************************************/

/*the following function call should be INSIDE the $(document).ready(function() because the targeted containers were created WHEN the page was loaded*/


$(document).ready(function () {
    /*on click on the "#js-shopping-list-form button" button activate function called addItem()*/
    $('#js-shopping-list-form').submit(function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        event.preventDefault();

        addItem();
    });
});
/*the following 2 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers were created AFTER the page was loaded*/

/*on click on the ".shopping-item-toggle" button activate function called checkItem()*/
$(document).on('click', '.shopping-item-toggle', checkItem);

/*on click on the ".shopping-item-delete" button activate function called deleteItem()*/
$(document).on('click', '.shopping-item-delete', deleteItem);
