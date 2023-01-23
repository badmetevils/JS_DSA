// in binary search the array is always sorted in order
const search = (arr, start, end, key) => {
  const mid = Math.floor((start + end) / 2);
  const anchor = arr[mid];
  if (start > end) return -1;
  if (key === anchor) {
    return mid;
  }

  if (key < anchor) {
    return search(arr, start, mid - 1, key);
  } else {
    return search(arr, mid + 1, end, key);
  }
};

const searchIterative = (arr, start, end, key) => {
  let found = -1;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    const anchor = arr[mid];
    if (anchor == key) {
      found = mid;
      break;
    }
    if (key < anchor) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return found;
};

const binarySearch = (arr, key) => {
  return searchIterative(arr, 0, arr.length - 1, key);
};

const arr = [2, 4, 6, 7, 8, 9, 11, 13, 15, 55, 67, 99, 100];
const result = binarySearch(arr, 14);
console.log(result);
