function isAlphanumeric(code: number) {
  // digits: 48-57
  // lowercase letters: 97-122
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let iCode = s.charCodeAt(i);
    let jCode = s.charCodeAt(j);

    while (!isAlphanumeric(iCode)) {
      i++;
      if (i === j) return true;
      iCode = s.charCodeAt(i);
    }
    while (!isAlphanumeric(jCode)) {
      j--;
      if (i === j) return true;
      jCode = s.charCodeAt(j);
    }

    if (iCode !== jCode) return false;

    i++;
    j--;
  }

  return true;
}
