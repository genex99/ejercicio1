const estudiantes = ["jesus", "eugenio", "jonh", "josias","jorge", "jasmin","william"]; 

const lista = ["jesus", "eugenio", "jonh", "josias","jorge", "jasmin","william"]; 
let ganadorIndex;

function getRandomIntInclusive(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


function sortear(){
 const randomIndex = getRandomIntInclusive(0, estudiantes.length - 1);
 ganadorIndex = randomIndex;
 document.querySelector(".resultadoGanador").textContent = `${estudiantes[ganadorIndex]}`;
 document.querySelector(".imagenGanadorr").src = `https://placehold.co/200x200?text=${estudiantes[ganadorIndex].slice(0, 1).toUpperCase()}${estudiantes[ganadorIndex].slice(1)}`;
}

function listar() {
      document.getElementById("listar").innerHTML=lista.toString();
    }
    
  