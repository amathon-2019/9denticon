export function array2dMaker(arr, lengthLimit) {
  let container = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    while (tempArr.length < lengthLimit - 1) {
      if (arr[i] !== undefined) {
        tempArr.push(arr[i]);
        i++;
      } else {
        break;
      }
    }
    arr[i] !== undefined ? tempArr.push(arr[i]) : null;
    container.push(tempArr);
    tempArr = [];
  }
  return container;
}
