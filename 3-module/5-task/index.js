function getMinMax(str) {
  let array = str.split(" ");
  let numOfarray = [];
  let obj = { min: null, max: null };
  array.forEach((element) => {
    if (isFinite(element)) {
      numOfarray.push(+element);
    }
    obj.min = numOfarray.sort((a, b) => a - b)[0];
    obj.max = numOfarray.sort((a, b) => a - b)[numOfarray.length - 1];
  });
  return obj;
}
