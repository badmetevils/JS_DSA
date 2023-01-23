const linerSearch = (arr, key) => {
  let loc = -1;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === key) {
      loc = index;
    }
  }

  return loc;
};
const arr = [10, 20, 30, 5, 2, 6];
const key = 2;
const result = linerSearch(arr, key);
console.log(result);
