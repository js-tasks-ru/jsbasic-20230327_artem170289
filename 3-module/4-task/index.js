function showSalary(users, age) {
  let info = "";
  users.filter((element) => {
    if (element.age <= age) {
      info += `${element.name}, ${element.balance}\n`;
    }
  });

  return info.slice(0, info.length - 1);
}
