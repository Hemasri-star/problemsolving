function findSecondSmallest(inputArray) {
    inputArray.sort(function(a, b) {
        return a - b;
    });
    return inputArray[1];
}

const inputArray = [1, 6, 5, 2, 3];
const secondSmallest = findSecondSmallest(inputArray);
console.log("Second smallest element: " + secondSmallest);
