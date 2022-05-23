// Mostrar quantas vezes a letra especificada aparece na string em questão

const stringCounter = (letter, string) => {
  var cont = 0;
  for (var i in string) {
    if (letter === string[i]) {
      cont++;
    }
    console.log(`A letra ${letter} esteve presente ${cont} vezes.`);
  }
};

stringCounter("a", "barata");
