// problem 1
function countToTen(current) {
	if (current > 10) {
		return;
	}
	
	console.log(current);
	
	if (current == 10) {
		return;
	}
	
	countToTen(current + 1);
}

// problem 2
function recursiveFactorial(n) {
	if (n == 0) {
		return 1;
	}
	
	return n * recursiveFactorial(n - 1);
}