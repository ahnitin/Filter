var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');


// form submit event

form.addEventListener('submit',addItem);

//delete event
itemlist.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);


// function add item

function addItem(e){
    e.preventDefault();
    console.log(1);

    // get input value

    var newItem= document.getElementById('item').value;
    var description = document.getElementById('description').value;
    //console.log(newItem1);
    
    //create new li element
    var li = document.createElement('li');

    li.className = "list-group-item";
    //console.log(li);

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(description));
    
    // delete button element
    var deleteBtn = document.createElement('button');
    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // creating text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);
    // append li to list
    itemlist.appendChild(li);
    //create edit button
    var editbtn = document.createElement('button');
    // add clases to edit button
    editbtn.className ='btn btn-info btn-sm float-right';
    //creating text node to the edit button
    editbtn.appendChild(document.createTextNode('Edit'));
    // append button to li
    li.append(editbtn);
}

// function remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are you sure"))
        {
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

// Filter items function
function filterItems(e)
{
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    //get li
    var items = itemlist.getElementsByTagName('li');
    // li collection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[2].textContent;
        //console.log(itemName); 
        // if not a matach will be equal to -1
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display ="block";
        }   
        else{
            item.style.display ="none";
        }
    });
    
}
