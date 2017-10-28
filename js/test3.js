/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getExtension('test1.css') === 'css'
  && getExtension('jquery.min.js') === 'js'
  && getExtension('.eslintrc') === 'eslintrc'
  && getExtension('monfichier') === false
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */
function getExtension(str) {
  // Contient la position à partir de laquelle commence l'extension
  var extStart;
  // Contient l'extension du 'string' ou false s'il n'y en a pas
  var extension;

  // Boucle parcourant le string 'str' en partant de la fin à la recherche d'un point qui indique que les caractères derrière celui-ci contiennent l'extension du 'str'
  for (var char = (str.length - 1); char >= 0; char--) {
    if (str[char] === '.') {
      extStart = ++char;
      // Si on trouve un point on sort de la boucle
      break;
    }
    // Si aucun point n'a été trouvé cela indique qu'il n'y a pas d'extension. On place alors une valeur négative pour le test suivant
    extStart = -1;
  }

  // Si 'extStart' est différent de -1 cela signifie qu'une extension a été trouvée. On récupère alors dans la variable 'extension' la portion de la chaine 'str' contenant l'extension grâce à la position obtenue précedemment dans 'extStart'
  if (extStart != -1) extension = str.substring(extStart);
  else extension = false;

  return extension;
}
