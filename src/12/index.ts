function intToRoman(num: number): string {
  const romanMap: { [key: number]: { 1: string; 5: string } } = {
    1: { 1: "I", 5: "V" },
    2: { 1: "X", 5: "L" },
    3: { 1: "C", 5: "D" },
    4: { 1: "M", 5: "" },
  };

  let roman = "",
    i = 1;
  while (num > 0) {
    let r = num % 10;
    const romanMapItem = romanMap[i];
    if (!romanMapItem) break;
    if (r < 4) {
      roman = romanMapItem[1].repeat(r) + roman;
    } else if (r === 4) {
      roman = romanMapItem[1] + romanMapItem[5] + roman;
    } else if (r === 5) {
      roman = romanMapItem[5] + roman;
    } else if (r < 9) {
      roman = romanMapItem[5] + romanMapItem[1].repeat(r - 5) + roman;
    } else if (r === 9) {
      roman = romanMapItem[1] + romanMap[i + 1][1] + roman;
    }
    num = Math.floor(num / 10);
    i++;
  }
  return roman;
}

console.log(intToRoman(1994)); // III
