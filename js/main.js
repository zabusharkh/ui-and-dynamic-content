//Open closure
//
//   Access new-item button. 
//   Access unordered list.
//   Declare variable list-item.
//
//   Define function removeItem (use event object to find out which item is clicked).
//      Remove clicked item from unordered list. 
//   End function removeItem.
//
//   Define function addItem.
//      Create list item and store output in a variable.
//
//      Use innerHTML on created list item and assign it with user input 
//      from prompt("Enter a new item for to-do list:").
//    
//      If list item has a content:   
//         Append list item to unordered list.
//        
//         Add event listener to the added list-item to listen for click event - event     
//         handler will be removeItem function.  
//      End if. 
//  
//   End function addItem.
//
//   Add event listener to button to listen for click event - event handler will be  
//   addItem function.
//
//Close and immediately invoke closure


(function (){
    
    "use strict";
    
    var addButton = document.querySelector("button");
    var itemList = document.querySelector("ul");
    
    var listItem;
    
    function removeItem(event) {
      event.target.parentElement.removeChild(event.target);
    }
    
    function addItem( ){
        var li = document.createElement("li");
        
        var userInput = prompt("Enter a new item for to-do list:").trim();
        li.innerHTML = userInput;
        
        if(userInput){
            itemList.appendChild(li);
            li.onclick = removeItem;
        }
        
    }
    
    addButton.addEventListener("click", addItem);
    
}());

