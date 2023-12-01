var input_type      = document.getElementById("inputType");
var input_search    = document.getElementById('searchType');

var btn_addSpecific = document.getElementById("btn_sList");
var btn_addGeneral  = document.getElementById("btn_gList");
var btn_search      = document.getElementById("btn_search");
var btn_delete      = document.getElementById("btn_delete");



//on mouseover and mouseout for Divs
var div = document.querySelector('.onhover');
div.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
div.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

//on mouseover and mouseout for buttons
btn_addSpecific.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
btn_addSpecific.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
btn_addGeneral.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
btn_addGeneral.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
btn_delete.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
btn_delete.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

//check radio 
function checkRadio() {
    var radios = document.querySelectorAll(".selectTypes");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log("Option " + radios[i].value + " is checked.");
        return true; 
      }
    }
}

// click add to specific list
const addSpecificList = () => {
    const input_val = input_type.value;
    if(input_val != '' && checkRadio()){
        var fruitList;
        var legumeList;
        var category = document.querySelector('input[name="selectTypes"]:checked').value;

        if (category === 'fruit') {
            fruitList = `<div class="alert alert-info">
                                <strong>Fruits! - ${input_val}</strong>
                            </div>`;
            fruitContainer.innerHTML += fruitList;
        } else if (category === 'legume') {
            legumeList = `<div class="alert alert-warning">
                                <strong>Legumes! - ${input_val}</strong>
                            </div>`;
            legumeContainer.innerHTML += legumeList;
        }
    }
    else{
        alert('Please make sure that you enter all the details!');
    }
    //input_type.value = "";
}
btn_addSpecific.addEventListener('click', addSpecificList);


//Function to Filter Fruits and Legumes
function toFruit(event) {
    var alertItem = event.target.closest('.alert-info');
    
    if (alertItem) {
        fruitContainer.appendChild(alertItem);
    }
}

function toLegumes(event) {
    var alertItem = event.target.closest('.alert-warning');
    
    if (alertItem) {
        legumeContainer.appendChild(alertItem);
    }
}

// click add to general list
const addGeneralList = () => {
    const input_val = input_type.value;
    if(input_val != '' && checkRadio()){
        var bothLists;
        var category = document.querySelector('input[name="selectTypes"]:checked').value;

        if (category === 'fruit') {
            bothLists = ` <div class="alert alert-info">
            <button type="button" class="customized-btn" onclick="toFruit(event)">   <strong>Fruits! - ${input_val}</strong>
                                </button></div>`;
            bothContainer.innerHTML += bothLists;
        } else if (category === 'legume') {
            bothLists = `<div class="alert alert-warning">
            <button type="button" class="customized-btn" onclick="toLegumes(event)">
                                <strong>Legumes! - ${input_val}</strong>
                                </button> </div>`;
            bothContainer.innerHTML += bothLists;
        }
    }
    else{
        alert('Please make sure that you enter all the details!');
    }
    //input_type.value = "";
}
btn_addGeneral.addEventListener('click', addGeneralList);


// Function to delete an item with a specific value from a container
function deleteItem(container, searchTerm) {
    var items = container.getElementsByClassName('alert');
    
    for (var i = 0; i < items.length; i++) {
        var text = items[i].innerText.toLowerCase();
        
        if (text.includes(searchTerm)) {
            container.removeChild(items[i]);
            i--; 
        }
    }
}
// click on delete button
const clickDelete = () => {
   var searchTerm = document.getElementById('searchType').value.toLowerCase();
   deleteItem(document.getElementById('fruitContainer'), searchTerm);
   deleteItem(document.getElementById('bothContainer'), searchTerm);
   deleteItem(document.getElementById('legumeContainer'), searchTerm);

}
btn_delete.addEventListener('click', clickDelete);

// Function to search and set background color
function serchForItem(Item) {
    var containers = document.querySelectorAll('.bg-success');
    containers.forEach(function(container) {
        var alertDivs = container.getElementsByClassName('alert');
        for (var i = 0; i < alertDivs.length; i++) {
            var text = alertDivs[i].innerText.toLowerCase();
            if (text.includes(Item)) {
                alertDivs[i].style.backgroundColor = 'red';
            } else {
                alertDivs[i].style.backgroundColor = '';
            }
        }
    });
}
// click on search for item
const searchItem = () => {
    var Item = document.getElementById('searchType').value.toLowerCase();
    serchForItem(Item);
}
btn_search.addEventListener('click', searchItem);



