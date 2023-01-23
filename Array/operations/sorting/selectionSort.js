// Selection worst case sorting O(n^2)
const selectionSort = (arr) => {
  const size = arr.length;
  let i = 0;

  while (i < size) {
    let j = i + 1;
    while (j < size) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
    i++;
  }
  return arr;
};

const arr = [5, 15, 0, 67, 2, 1, 6, 1, 4, 2, 3, 88, 9, 96];
const result = selectionSort(arr);
console.log(result);
