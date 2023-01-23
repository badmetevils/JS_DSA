// TC : O(n*d)  in worst case d=n-1 then it will become o(n^2)
const leftRotate = (arr, d) => {
  const size = arr.length;
  for (let j = 0; j < d; j++) {
    const last = arr[0];
    for (let i = 1; i < size; i++) {
      arr[i - 1] = arr[i];
    }
    arr[size - 1] = last;
  }
  return arr;
};

const optimizedRotate = (arr, d) => {};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const d = 3;
const result = leftRotate(arr, d);
console.log(result);
