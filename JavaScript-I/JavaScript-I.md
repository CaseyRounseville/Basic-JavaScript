##JavaScript I Recursion##

**Problem 1:**
```JavaScript
let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}
```
write a recursive function called `countToTen` that mimics the while loop above.

when your code is ready, test it in your browser.

##Next Problem##

**Problem 2:**
```JavaScript
const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));
```

write the above function in a recursive way. call it recursiveFactorial
when your ready test it in your browser.
