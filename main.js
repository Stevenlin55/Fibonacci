function fibonacciMemoization(n) {
    let dp = []; //fibonnaci sequence can be obtained using dynamic programming / memoization
    if (n == 0) { 
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp; //return array that has the values of fibonacci
}

function printFibMemoization(n) {
    for (let i of fibonacciMemoization(n)) { //iterate through the array of fibonacci values and print them out
        console.log(i);
    }
}

printFibMemoization(10);
