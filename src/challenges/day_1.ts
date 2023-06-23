export function uniqueCharInString(s: string) {
  let unique = new Set();
  for (let i = 0; i < s.length; i++) {
    if (unique.has(s[i])) {
      return false;
    }
    unique.add(s[i]);
  }
  return true;
}

export function isPermutation(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  return arr1.toString() === arr2.toString();
}

export function urlify(str: string) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      res += "%20";
    } else {
      res += str[i];
    }
  }
  return res;
}

console.log(urlify("google:// hello 20"));
