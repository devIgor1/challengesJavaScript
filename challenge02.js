// Saber quantos % um número é do outro

const percentage = (nominator, denominator) => {
  var result = nominator / denominator;
  console.log(
    nominator + " é equivalente a " + result * 100 + "% do " + denominator
  );
};

percentage(50, 50);
