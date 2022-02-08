const nReadlines = require("n-readlines");
const broadbandLines = new nReadlines("./input.txt");
let filterCount = 0;
let totalSatisfied = 0;
const likeAndDislike = (() => {
  let line = broadbandLines.next();

  const result: { likes: string[]; dislikes: string[] }[] = [];

  while ((line = broadbandLines.next())) {
    let ingredient = { likes: [], dislikes: [] };

    ingredient.likes = line.toString("ascii").split(/\s?\r/)[0].split(" ");
    line = broadbandLines.next();
    ingredient.dislikes = line.toString("ascii").split(/\s?\r/)[0].split(" ");
    result.push(ingredient);
  }

  return result;
})();
let numberofPeople = likeAndDislike.length;

const playgroundIngredients = ((object) => {
  const Ingredients = new Map<string, { likes: number; dislikes: number }>();

  for (let i = 0; i < object.length; i++) {
    for (let j = 1; j < object[i].likes.length; j++) {
      if (Ingredients.has(object[i].likes[j])) {
        Ingredients.set(object[i].likes[j], {
          likes: Ingredients.get(object[i].likes[j]).likes + 1,
          dislikes: Ingredients.get(object[i].likes[j]).dislikes,
        });
      } else {
        Ingredients.set(object[i].likes[j], {
          likes: 1,
          dislikes: 0,
        });
      }
    }
    for (let j = 1; j < object[i].dislikes.length; j++) {
      if (Ingredients.has(object[i].dislikes[j])) {
        Ingredients.set(object[i].dislikes[j], {
          likes: Ingredients.get(object[i].dislikes[j]).likes,
          dislikes: Ingredients.get(object[i].dislikes[j]).dislikes + 1,
        });
      } else {
        Ingredients.set(object[i].dislikes[j], {
          likes: 0,
          dislikes: 1,
        });
      }
    }
  }

  return Ingredients;
})(likeAndDislike);

console.log(playgroundIngredients);

const removeItemFromlikeAndDislike = (ingredient: string, take = true) => {
  for (let i = 0; i < likeAndDislike.length; i++) {
    let likedIngredients = likeAndDislike[i].likes;
    let dislikedIngredients = likeAndDislike[i].dislikes;

    if (take) {
      if (likedIngredients.includes(ingredient)) {
        likedIngredients.splice(likedIngredients.indexOf(ingredient), 1);
      } else if (dislikedIngredients.includes(ingredient)) {
        likeAndDislike.splice(i, 1);
        i--;
      }
    } else {
      if (dislikedIngredients.includes(ingredient)) {
        dislikedIngredients.splice(dislikedIngredients.indexOf(ingredient), 1);
      } else if (likedIngredients.includes(ingredient)) {
        likeAndDislike.splice(i, 1);
        i--;
      }
    }
  }
};

const satisfied = () => {
  if (filterCount !== 0) numberofPeople = likeAndDislike.length;
  const currentNumberOfPeople = likeAndDislike.length;
  filterCount++;
  let satisfied = 0;
  for (let i = 0; i < likeAndDislike.length; i++) {
    if (
      likeAndDislike[i].likes.length === 1 &&
      likeAndDislike[i].dislikes.length === 1
    ) {
      likeAndDislike.splice(i, 1);
      i--;
      satisfied++;
      totalSatisfied++;
    }
  }
  console.log(
    `satisfied: ${satisfied} out of ${numberofPeople} after the ${filterCount} filtraion \n lost ${
      numberofPeople - currentNumberOfPeople
    } people`
  );
};
const willbeintheoutput: string[] = [];

const nowInthePlayground = () => {
  console.log(
    `now in playgroumd: ${playgroundIngredients.size} ingredients left`
  );
};

const output = () => console.log(willbeintheoutput);

// first filter : remove all with no likes nad no dislikes

for (let [key, value] of Array.from(playgroundIngredients)) {
  if (value.likes === 0) {
    playgroundIngredients.delete(key);
    removeItemFromlikeAndDislike(key, false);
  }

  if (value.dislikes === 0) {
    playgroundIngredients.delete(key);
    removeItemFromlikeAndDislike(key);
    willbeintheoutput.push(key);
  }
}
satisfied();
console.log(likeAndDislike);
console.log(playgroundIngredients);
output();

// console.log(likeAndDislike);

// second filter : remove all with equal like and dislike

for (let [key, value] of Array.from(playgroundIngredients)) {
  if (value.likes === value.dislikes) {
    playgroundIngredients.delete(key);
    // will be in output
    removeItemFromlikeAndDislike(key);
  }
}
satisfied();
console.log(playgroundIngredients);
output();
console.log(likeAndDislike);

console.log(totalSatisfied);
// const numberofPeople = likedAndDisliked.likes.length;

// export const playgroundIngredient: string[] = (() => {
//   const numberofPeople = likedAndDisliked.likes.length;

//   const result: string[] = [];
//   for (let i = 0; i < numberofPeople; i++) {
//     for (let j = 1; j < likedAndDisliked.likes[i].length; j++) {
//       !result.includes(likedAndDisliked.likes[i][j]) &&
//         result.push(likedAndDisliked.likes[i][j]);
//     }
//   }
//   for (let i = 0; i < numberofPeople; i++) {
//     for (let j = 1; j < likedAndDisliked.dislikes[i].length; j++) {
//       !result.includes(likedAndDisliked.dislikes[i][j]) &&
//         result.push(likedAndDisliked.dislikes[i][j]);
//     }
//   }
//   return result;
// })();

// const numberOfIngredients = playgroundIngredient.length;

// const numberOfLikesToAnIngredient = (ingredient: string) => {
//   let result = 0;
//   for (let i = 0; i < likedAndDisliked.likes.length; i++) {
//     for (let j = 1; j < likedAndDisliked.likes[i].length; j++) {
//       if (likedAndDisliked.likes[i][j] === ingredient) {
//         result++;
//       }
//     }
//   }
//   return result;
// };

// const numberOfDislikesToAnIngredient = (ingredient: string) => {
//   let result = 0;
//   for (let i = 0; i < likedAndDisliked.dislikes.length; i++) {
//     for (let j = 1; j < likedAndDisliked.dislikes[i].length; j++) {
//       if (likedAndDisliked.dislikes[i][j] === ingredient) {
//         result++;
//       }
//     }
//   }
//   return result;
// };

// interface Ingredient {
//   name: string;
//   Liked: number;
//   Disliked: number;
//   effective: number;
// }

// export const ingredients_liked_disliked: Ingredient[] = (() => {
//   const result: Ingredient[] = [];
//   for (let i = 0; i < numberOfIngredients; i++) {
//     let Liked = numberOfLikesToAnIngredient(playgroundIngredient[i]);
//     let Disliked = numberOfDislikesToAnIngredient(playgroundIngredient[i]);
//     result.push({
//       name: playgroundIngredient[i],
//       Liked,
//       Disliked,
//       effective: Liked - Disliked,
//     });
//   }
//   return result;
// })();

// // const output = (() => {
// //   let result: string[] = [];
// //   for (let i = 0; i < ingredients_liked_disliked.length; i++) {
// //     if (
// //       ingredients_liked_disliked[i].Liked >
// //       ingredients_liked_disliked[i].Disliked
// //     ) {
// //       result.push(ingredients_liked_disliked[i].name);
// //     }
// //   }
// //   return result;
// // })();

// let satisfied = (output: string[]) => {
//   const outputIncludesAllILike = (iLike: string[], output: string[]) => {
//     for (let j = 1; j < iLike.length; j++) {
//       if (!output.includes(iLike[j])) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const outputNotIncludesAllIDislike = (
//     iDislike: string[],
//     output: string[]
//   ) => {
//     for (let j = 1; j < iDislike.length; j++) {
//       if (output.includes(iDislike[j])) {
//         return false;
//       }
//     }
//     return true;
//   };

//   let result = 0;
//   for (let i = 0; i < numberofPeople; i++) {
//     outputIncludesAllILike(likedAndDisliked.likes[i], output) &&
//       outputNotIncludesAllIDislike(likedAndDisliked.dislikes[i], output) &&
//       result++;
//   }
//   return result;
// };

// // const filteredIngredients = (() => {
// //   const result: string[] = [];
// //   for (let i = 0; i < playgroundIngredient.length; i++) {
// //     if (
// //       numberOfLikesToAnIngredient(playgroundIngredient[i]) >=
// //         Math.floor(numberofPeople / numberOfIngredients) &&
// //       numberOfDislikesToAnIngredient(playgroundIngredient[i]) <=
// //         Math.floor(numberofPeople / numberOfIngredients) &&
// //       numberOfLikesToAnIngredient(playgroundIngredient[i]) >=
// //         numberOfDislikesToAnIngredient(playgroundIngredient[i])
// //     ) {
// //       result.push(playgroundIngredient[i]);
// //     }
// //   }
// //   return result;
// // })();

// // console.log(filteredIngredients.length);

// // const generatedPowerSet = ((ingredients) => {
// //   var result: string[][] = [];

// //   for (var i = 1; i < 1 << ingredients.length; i++) {
// //     var subset = [];
// //     for (var j = 0; j < ingredients.length; j++)
// //       if (i & (1 << j)) subset.push(ingredients[j]);

// //     result.push(subset);
// //   }

// //   return result;
// // })(playgroundIngredient);

// // console.log(generatedPowerSet.length);

// // let outputfilteredIngredientsay = [];
// // for (let i = 0; i < generatedPowerSet.length; i++) {
// //   outputfilteredIngredientsay.push(satisfied(generatedPowerSet[i]));
// // }

// // const optimumOutputIndex = outputfilteredIngredientsay.indexOf(
// //   Math.max(...outputfilteredIngredientsay)
// // );

// // const optimumOutput = generatedPowerSet[optimumOutputIndex];

// // console.log(
// //   `optimumOutput:${optimumOutput.length} ${optimumOutput} \n total ingredients:${numberOfIngredients} and satisfied: ${outputfilteredIngredientsay[optimumOutputIndex]} out of ${numberofPeople} people`
// // );

// // console.log(ingredients_liked_disliked);

// function removeItem<T>(arr: Array<T>, value: T) {
//   const index = arr.indexOf(value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
// }

// const willbeintheoutput: string[] = [];

// // filter which has 0 likes
// for (let i = 0; i < ingredients_liked_disliked.length; i++) {
//   if (ingredients_liked_disliked[i].Liked === 0) {
//     removeItem(playgroundIngredient, playgroundIngredient[i]);
//   } else if (ingredients_liked_disliked[i].Disliked === 0) {
//     willbeintheoutput.push(playgroundIngredient[i]);
//     removeItem(playgroundIngredient, playgroundIngredient[i]);
//   }
// }
// console.log(playgroundIngredient.length);
// console.log(willbeintheoutput.length);
// console.log(satisfied(willbeintheoutput));
