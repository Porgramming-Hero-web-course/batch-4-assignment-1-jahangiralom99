// problem 3  count Word Occurrences
const countWordOccurrences = (count1: string, count2: string): number => {
  const splitCount1 = count1.toLowerCase().split(" ");
  const splitCount2 = count2.toLowerCase();

  let count : number = 0;
  for (let i = 0; i < splitCount1.length; i++) {
    if (splitCount1[i] === splitCount2) {
      count++; 
    }
  }
  return count
};

// console.log(
//   countWordOccurrences("TypeScript is great. I love TypeScript", "typescript")
// );
