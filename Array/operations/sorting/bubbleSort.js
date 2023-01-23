const bubbleSort = (arr) => {
  let i = 0;
  const size = arr.length;
  while (i < size) {
    let j = 0;
    while (j < size) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        console.log({ temp });
        arr[j] = arr[j + 1];
        arr[j] = temp;
      }
      j++;
    }
    i++;
  }
  return arr;
};
const arr = [5, 15, 0, 67, 2, 1, 6, 1, 4, 2, 3, 88, 9, 96];
const result = bubbleSort(arr);
console.log(result);
