const names = ["Misra", "Stevens", "Jamieson", "Wright", "Smith"];

const mrNames = names.map(name => `Mr. ${name}`);

function addSalutation(names, sal) {
  return names.map(name => `${sal} ${name}`);
}

console.log(addSalutation(names, "Mrs."));
