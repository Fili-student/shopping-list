// Einkaufsliste: 
// das muss :
// -was hinzufügen
//- was löschen

// bonus:
//(-alles löschen?)
// verschiedene seiten mit farbschema?

// Farbschema: cute , dark, healthy or fitness? für serien mit staffel und ep
// mehrere machen ?
// responsive seite

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (element) => {
          element.target.style.backgroundColor = "rgb(204, 193, 44)";
    
  });
  

  function wasDazu(){
    input.add = "";
  }
  function wasWeg(){
    input.remove = "";
  }