function factorial(n) {
  let result = 1;

  for (let i = 1; n >= i ; i++) {
    result *= i;
  }
  return result;
}
