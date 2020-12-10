$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
class icone {

  constructor( name, prefix, type, family ){

    this.name = name;
    this.prefix = prefix;
    this.type = type;
    this.family = family;
  }
}

const Icons = [
  new icone ("dog", "fas", "fa-dog", "animals"),
  new icone ("owl", "fas", "fa-owl", "animals"),
  new icone ("cat", "fas", "fa-cat", "animals"),
  new icone ("horse", "fas", "fa-horse", "animals"),
  new icone ("frog", "fas", "fa-frog", "animals"),
  new icone ("hippo", "fas", "fa-hippo", "animals"),
  new icone ("rabbit", "fas", "fa-rabbit", "animals"),
  new icone ("spider", "fas", "fa-spider", "animals"),
  new icone ("snake", "fas", "fa-snake", "animals"),
  new icone ("ram", "fas", "fa-ram", "animals"),
  

];

console.log(Icons)




  // Semezioniamo il container icons

const container = document.getElementById('icons')

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

