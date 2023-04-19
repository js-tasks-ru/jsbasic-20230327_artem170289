function filterRange(arr, a, b) {
  let set = [];
  arr.forEach((element) => {
    if (element >= a && element <= b) {
      set.push(element);
    }
  });
  return set;
}
