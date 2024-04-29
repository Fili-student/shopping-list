//- responsive seite

const input = document.querySelector("#myInput");
const button = document.querySelector("button");
const ul = document.querySelector(".todo-list")
const todoForm = document.getElementById('todo-form');
const alles = document.querySelector("#alles")
// const weg = "            X";
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das neuladen
});

   function wasDazu(){
    let itemText = input.value.trim(); //remove white spaces
        if(itemText !== ""){// wenn text nicht leer ist
            let newItem = document.createElement("li");//neues li kreieren
            newItem.textContent = itemText; //content des li
            ul.appendChild(newItem);//das li ins ul packen
             input.value = "";//damit das input feld wieder leer ist
            }
          }
input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {//13 steht für ENTER
        wasDazu();// aufrufen wenn enter gedrückt
    }


  ul.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") { // Check if the clicked element is a list item
    ul.removeChild(event.target);
    }
 });
});

alles.addEventListener("click", function() {
    wegMitAllem();
    });

function wegMitAllem() {
    ul.innerHTML = ""; 
}


