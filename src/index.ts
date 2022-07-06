function fib(n: number): number {
  if (n < 2) return n;
  let pv1 = 1,
    pv2 = 0,
    tmp;
  for (let i = 2; i < n; i++) {
    tmp = pv1 + pv2;
    pv2 = pv1;
    pv1 = tmp;
  }
  return pv1 + pv2;
}
console.log(fib(7));
