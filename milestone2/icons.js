$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
$(function () {

  class icone {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const IconsContainer =   [
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
]

  console.log(IconsContainer);

  let container = $(".icons");
  const blue = "blue";
  const purple = "purple";
  const orange = "orange";

  IconsContainer.forEach((icon) => {
      if (icon.family === "animals") {
        icon.color = orange;
      } else if (icon.family === "computers") {
        icon.color = blue;
      } else {
        icon.color = purple;
      };
  });

  let print = IconsContainer.forEach((icon) => {
    container.append(`
      <div>
      <i class="${icon.prefix} ${icon.type}" style="color:${icon.color}"></i>
      <div class="title">${icon.name}</div>
      </div>
    `);
  });

})})