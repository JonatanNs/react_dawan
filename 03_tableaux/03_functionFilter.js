// La fonction filter() crée une copie du tableau existant (SANS LE MODIFIER)
// filter() applique une 'filtre' sur les éléments

const { text } = require("stream/consumers");

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const wordsFilter = words.filter((word) => word.length > 6);
console.log(wordsFilter);

const textFilter = (entreeUtilisateur) => {
  return words.filter((word) => word.indexOf(entreeUtilisateur) !== -1);
};

console.log(textFilter("es"));