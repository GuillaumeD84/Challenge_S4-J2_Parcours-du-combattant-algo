/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getLongestString(['coucou', 'hello', 'bonjour']) === 'bonjour'
  && getLongestString(['css', 'html', 'js', 'php']) === 'html'
  && getLongestString([]) === false
  && getLongestString(['un', 2, 'trois', 4, 'cinq']) === 'trois'
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo4
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 */
function getLongestString(arr) {
  // Contient la chaine de caractère la plus longue
  var longestString = '';

  // On test si le tableau n'est pas vide
  if (arr.length > 0) {
    // On parcours tout le tableau
    for (arrayElement in arr) {
      // Si la chaine à l'index 'arrayElement' est plus longue que celle stockée dans 'longestString' alors remplace 'longestString' par la nouvelle
      if (arr[arrayElement].length > longestString.length) longestString = arr[arrayElement];
    }
  }

  // Si rien n'a été stocké dans 'longestString' on retourne false
  if (longestString !== '') return longestString;
  return false;
}
