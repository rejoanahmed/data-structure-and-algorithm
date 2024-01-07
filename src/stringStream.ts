const stream = (str: string, limit: number) => {
  let remaining = str.length;
  let elements = 0;
  const getTemplateLiteral = (current: number, total: number) => {
    return {
      length: 3 + current.toString().length + total.toString().length,
      template: `<${current}/${total}>`,
    };
  };

  while (remaining > 0) {
    if (remaining > str.length) return [];
    elements++;
    const lg10 = Math.log10(elements);
    if (lg10 % 1 === 0) {
      console.log(lg10, elements);
      remaining += elements - 1;
    }
    const { length } = getTemplateLiteral(elements, elements);
    remaining = remaining - limit + length;
  }

  let result = [];
  let curIndex = 0;
  for (let i = 0; i < elements; i++) {
    const { template, length } = getTemplateLiteral(i + 1, elements);
    const strStart = str.slice(curIndex, curIndex + limit - length);
    result.push(strStart + template);
    curIndex += limit - length;
  }
  return result;
};
