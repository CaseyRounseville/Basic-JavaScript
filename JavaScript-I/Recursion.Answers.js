//Problem 1
const countToTen = (startNum = 1) => {
  //use recursion to count to 10
  console.log('Recursive Loop', startNum);
  if (startNum < 10) return countToTen(startNum + 1);
};

countToTen();

const recursiveFactorial = num => {
    //use recursion to complete this function
    const result = num - 1;
    if (num === 1) {
        return num;
    }
    return num * recursiveFactorial(result);
};

console.log(recursiveFactorial(5));
