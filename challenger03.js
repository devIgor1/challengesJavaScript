// Uma função que receba um objeto(com atributo nome, sobrenome e idade) e delete algum deles caso esteja vazio(null)

const myCleaning = (object) => {
  if (object.name === null) {
    delete object.name;
  } else if (object.surname === null) {
    delete object.surname;
  } else if (object.age === null) {
    delete object.age;
  } else console.log("Nada a deletar");
  console.log(object);
};

myCleaning({ name: "Igor", surname: "Moraes", age: 21 });
