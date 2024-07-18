function fibonacci(num) {
    // Initialize an array to store Fibonacci numbers with initial known values
    let memo = [0, 1];
    
    // Recursive function with memoization
    function fib(n) {
        if (memo[n] !== undefined) {
            return memo[n];
        }
        
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
    
    // Edge case for n = 0
    if (num === 0) {
        return memo[0];
    }
    
    // Calculate and return the Fibonacci number for num
    return fib(num);
}

// Example usage:
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
