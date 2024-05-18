function fibonacci(num, i = 1, a = 0, b = 1) {
// your code here
	if (i == num)
	{
		return a;
	}
	const temp = a + b;
	return fibonacci(num, i + 1, b, temp);
}

module.exports = fibonacci;
