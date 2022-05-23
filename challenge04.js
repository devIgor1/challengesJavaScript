//Organizar de acordo com true ou false

var persons = [
  { itsMe: false, admin: false, name: "Renata" },
  { itsMe: false, admin: false, name: "Igor" },
  { itsMe: true, admin: true, name: "Caio" },
  { itsMe: false, admin: true, name: "Lucas" },
  { itsMe: true, admin: true, name: "Eduardo" },
  { itsMe: false, admin: false, name: "Samanta" },
];

// Se o return for < 0, o 'a' vem primeiro do que o 'b'
// Se o return for > 0, o 'b' vem primeiro do que o 'a'

const organizer = (personsList) => {
  personsList.sort((a, b) => {
    if (a.itsMe === true && b.itsMe === false) {
      return -1;
    }
  });
  console.log(personsList);

  personsList.sort((a, b) => {
    if (a.admin === true && b.admin === false) {
      return -1;
    }
  });
  console.log(personsList);
};

organizer(persons);
