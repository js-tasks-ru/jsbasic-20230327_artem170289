function makeFriendsList(friends) {
  let list = document.createElement("ul");
  friends.forEach((element) => {
    let user = document.createElement("li");
    user.innerText = `${element.firstName} ${element.lastName};`;
    list.append(user);
  });
  return list;
}
