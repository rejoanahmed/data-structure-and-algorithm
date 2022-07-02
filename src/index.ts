// problemlink
// https://leetcode.com/problems maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/

// function maxArea(
//   h: number,
//   w: number,
//   horizontalCuts: number[],
//   verticalCuts: number[]
// ): number {
//   horizontalCuts.sort((a, b) => a - b);
//   verticalCuts.sort((a, b) => a - b);
//   horizontalCuts.push(h);
//   verticalCuts.push(w);
//   horizontalCuts.unshift(0);
//   verticalCuts.unshift(0);
//   let M = BigInt(10 ** 9 + 7);
//   const hl = horizontalCuts.length;
//   const vl = verticalCuts.length;
//   let maxArea: BigInt = BigInt(0);
//   for (let i = 0; i < hl - 1; i++) {
//     for (let j = 0; j < vl - 1; j++) {
//       const A = verticalCuts[j] * horizontalCuts[i];
//       const B = verticalCuts[j + 1] * horizontalCuts[i];
//       const C = verticalCuts[j] * horizontalCuts[i + 1];
//       const D = verticalCuts[j + 1] * horizontalCuts[i + 1];
//       // console.log(
//       //   `v[j]:${verticalCuts[j]};v[j+1]:${verticalCuts[j + 1]};h[i]:${
//       //     horizontalCuts[i]
//       //   };h[i+1]:${horizontalCuts[i + 1]}`
//       // );
//       // console.log(A, B, C, D);
//       const area = BigInt(D - B - C + A);
//       maxArea = BigInt(Math.max(Number(maxArea), Number(area)));
//     }
//   }
//   return Number(maxArea) % Number(M);
// }

var maxArea = function (
  h: number,
  w: number,
  horizontalCuts: any[],
  verticalCuts: any[]
) {
  const maxLength = (distances: number[], end: number): number => {
    let ans: number = distances[0] - 0; // starts at 0;
    for (let i = 1; i < distances.length; i++) {
      ans = Math.max(ans, distances[i] - distances[i - 1]);
    }
    ans = Math.max(ans, end - distances[distances.length - 1]);
    return ans;
  };
  horizontalCuts.sort((a, b) => {
    return a - b;
  });
  verticalCuts.sort((a, b) => {
    return a - b;
  });
  let maxWidth = maxLength(horizontalCuts, h);
  let maxHeight = maxLength(verticalCuts, w);
  // console.log("maxWidth:", maxWidth, "maxHeight:", maxHeight);
  return Number((BigInt(maxWidth) * BigInt(maxHeight)) % BigInt(10 ** 9 + 7));
};
console.log(maxArea(1000000000, 1000000000, [2], [2]));
