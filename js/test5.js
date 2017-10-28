/*
 * Tests
 */
var container = document.getElementById('container');
if (
  sum([1, 2, 3]) === 6
  && sum(['un', 2, 'trois', 4, 'cinq']) === 6
  && sum([]) === 0
  && sum([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo5
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 */
function sum(arr) {
  // Contient la somme des int des tableaux
  var total = 0;

  // Cette boucle permet de convertir les tableaux contenant des tableaux qui eux même contiennent des tableaux etc ... en un tableau simple.
  // On test dans le while si notre tableau contient autre chose qu'un nombre
  while (containArray(arr)) {
    // On récupère un tableau simplifié de 1 niveau. C'est à dire que si notre tableau contient des tableaux qui eux même contiennent des tableaux, il faudra éxécuter cette fonction plusieurs fois.
    arr = arrayToInt(arr);
  }

  // On fait le somme de tous les éléments
  total = sumElements(arr);

  console.log(total);
  return total;



  /////////////////////////////////////////////////////////////////////////
  ////////////////////////////Exemple récursif/////////////////////////////
  /////////////////////////////////////////////////////////////////////////

  // Ce tout petit bout de code seul équivaut au code au dessus + toutes les fonctions qui suivent. On a pu énormement simplifier grâce à l'utilisation de la fonction 'sum(array)' de façon récursive

  // var total = 0;
  //
  // for (var index in arr) {
  //   var value = arr[index];
  //
  //   if (typeof(value) === 'number') {
  //     total += value;
  //   }
  //   else if (typeof(value) === 'object') {
  //     var subTotal = sum(value);
  //     total += subTotal;
  //   }
  // }
  //
  // return total;

  /////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////
}

// Cette fonction fait la somme de tous les nombres d'un tableau
function sumElements(arr) {
  var total = 0;

  for (element in arr) {
    if (typeof(arr[element]) === 'number') total += arr[element];
  }

  return total;
}

// Cette fonction teste si au moins un des éléments de notre tableau est lui même un tableau
function containArray(arr) {
  for (index in arr) {
    if (typeof(arr[index]) === 'object') return 1;
  }
  return 0;
}

// Cette fonction simplifie de 1 niveau les tableaux contenant des tableaux
// Ex array = [a, [b, c, d], [e, [f, g]]] ==> [a, b, c, d, e, [f, g]]
function arrayToInt(arr) {
  // On créé un nouveau tableau que l'on retournera simplifié par rapport à 'arr'
  var newArray = [];
  // On va avoir besoin de cette index car la longueur de notre nouveau tableau est supérieures à l'originale. On ne peut donc pas se contenter de le parcourir simplement avec une boucle for et utiliser son index
  // [a, [b, c]].length = 2  !=  [a, b, c].length = 3
  var index = 0;

  // On parcourt tous les éléments du tableau 'arr'
  for (element in arr) {
    // Si on tombe sur un nombre, on se contente de le copier dans le nouveau tableau
    if (typeof(arr[element]) === 'number') {
      newArray[index] = arr[element];
      index++;
    }
    // Sinon on reparcourt tous les élements du tableau contenu dans 'arr' et on les mets les un à la suite des autres dans le nouveau tableau
    else {
      for (arrayElement in arr[element]) {
        newArray[index] = arr[element][arrayElement];
        index++;
      }
    }
  }

  return newArray;
}
