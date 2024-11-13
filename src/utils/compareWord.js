import { mapWord } from "./mapWord";

function compareWord(a, b) {
  const aPart = a.split("");
  const bPart = b.split("");
  const wordMap = mapWord(bPart);
  const res = new Array(aPart.length).fill(null);

  for (let i = 0; i < aPart.length; i++) {
    if (aPart[i] === bPart[i]) {
      res[i] = "C";
      wordMap[aPart[i]]--;
    }
  }

  for (let i = 0; i < aPart.length; i++) {
    if (wordMap[aPart[i]] > 0 && bPart.includes(aPart[i])) {
      res[i] = "P";
    } else {
      if (!res[i]) {
        res[i] = "I";
      }
    }
  }

  return res;
}

export { compareWord };
