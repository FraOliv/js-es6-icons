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

const IconsContainer = [
  new icone ("dog", "fas", "fa-dog", "animals"),
  new icone ("dove", "fas", "fa-dove", "animals"),
  new icone ("cat", "fas", "fa-cat", "animals"),
  new icone ("horse", "fas", "fa-horse", "animals"),
  new icone ("hippo", "fas", "fa-hippo", "animals"),
  new icone("carrot", "fas", "fa-carrot", "vegetables"),
  new icone("lemon", "fas", "fa-lemon", "vegetables"),
  new icone("apple", "fas", "fa-apple-alt", "vegetables"),
  new icone ("spider", "fas", "fa-spider", "animals"),
  new icone ("kiwi-bird", "fas", "fa-kiwi-bird", "animals"),
  new icone ("paw", "fas", "fa-paw", "animals"),
  new icone ("otter", "fas", "fa-otter", "animals"),
  new icone ("compact-disc", "fas", "fa-compact-disc", "computers"),
  new icone ("database", "fas", "fa-database", "computers"),
  new icone ("download", "fas", "fa-download", "computers"),
  

];
console.log(IconsContainer)







  // Semezioniamo il container icons

const container = $("div.icons");
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
 function print(array,selector){

    array.forEach(element =>{

        selector.append(`
      <div>
        <i class="${element.prefix} ${element.type}"></i>
      </div>`
      );
      })
  }

  const printIcone = print(IconsContainer, container);

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
