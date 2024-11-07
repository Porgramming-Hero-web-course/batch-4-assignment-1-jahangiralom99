// // problem 2 remove Duplicates
const removeDuplicates = (dupArray: number[]): number[] => {
  let dubAry: number[] = [];
  for (let i = 0; i < dupArray.length; i++) {
    const element = dupArray[i];
    if (!dubAry.includes(element)) {
      dubAry.push(element);
    }
  }
  return dubAry;
};

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5, 5,]));


