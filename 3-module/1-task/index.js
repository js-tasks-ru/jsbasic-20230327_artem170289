function namify(users) {
  let mass = [];
  users.forEach((element) => {
    mass.push(element.name);
  });
  return mass;
}
