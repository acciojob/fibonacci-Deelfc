function fibonacci(num) {
    if (num === 0) return 0;
    
    let prev1 = 0;  // F(0)
    let prev2 = 1;  // F(1)
    let current = 0;
    
    for (let i = 2; i <= num; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    
    return current;
}

// Example usage:
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
