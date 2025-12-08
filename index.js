
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
const resetBtn= document.getElementById("reset-btn")
// récupérer la valeur sauvegardée ou mettre 0 si rien


let count = parseInt(localStorage.getItem("count")) || 0;
countEl.textContent = count
// récupérer l'historique sauvegardé

// récupérer l'historique comme TEXTE (pas JSON)
let savedHistory = localStorage.getItem("history") || ""
saveEl.textContent = savedHistory



function increment() {
      countEl.classList.remove("pop-animation");
    void countEl.offsetWidth;
  count +=1
    countEl.innerText = count
localStorage.setItem("count", count);
   countEl.classList.add("pop-animation");

}

function save() {
    // Texte à sauvegarder
      let countStr = count + " - "
    saveEl.textContent += countStr
    
  // Sauvegarder comme TEXTE
    localStorage.setItem("history", saveEl.textContent)
 // Reset compteur
    count = 0
    countEl.textContent = 0
    localStorage.setItem("count", count)
}
    
function reset(){
    count = 0
    countEl.textContent = count;
    saveEl.innerHTML = "Previous entries: ";

 localStorage.setItem("history", saveEl.textContent);
localStorage.setItem("count", count);
    
}
resetBtn.addEventListener("click", reset)
