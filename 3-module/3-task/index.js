function camelize(str) {
  let arr = str.split("-");
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      arr[i] = arr[i][num].toUpperCase() + arr[i].slice(num + 1);
    }
  }

  return arr.join("");
}
