
const addItem=document.getElementById("addItem");
const shoppingForm=document.getElementById("shoppingForm");
const shoppingList=document.getElementById("shoppingList");


shoppingForm.addEventListener("submit", function(event) {
    const newItemText=addItem.value;

    event.preventDefault();

    if (newItemText !== "") {
        const newItem=document.createElement('li');
        newItem.textContent=newItemText;
        

        const removeButton=document.createElement('button');
        removeButton.textContent="Delete";

        removeButton.addEventListener("click", function() {
            this.parentElement.remove();
        })
        const editButton=document.createElement('button');
        editButton.textContent="Edit";
        let isEditing = false;

        editButton.addEventListener("click", function() {
            if(isEditing) {
                this.parentElement.contentEditable=false;
                editButton.textContent="Edit"
                isEditing=false;
            }else {
                this.parentElement.contentEditable=true;
                this.parentElement.focus();
                editButton.textContent="Save";
                this.spellcheck=false;
                isEditing=true;
            }
            })

        newItem.appendChild(removeButton);
        newItem.appendChild(editButton);
        shoppingList.appendChild(newItem);

        addItem.value="";
        return newItem;
     }})
    
