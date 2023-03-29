function checkSpam(str) {
  let lowerCase = str.toLowerCase();
  if (lowerCase.includes('1xbet')) {
    return true;
  }
  else if (lowerCase.includes('xxx')) {
    return true;
  }
  
  return false;
}
