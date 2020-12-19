function greaterThan(n) {
    return m => m > n;
  }
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11)); // true


  // ========== Default ==========
  // Script: greaterThan10 (memory for let)
  // Global[Scopes]: {greaterThan10: undefined}
  

  // ========== After running the code ==========
  // Script: greaterThan10: m => m > n
  // Global[Scopes]: {greaterThan10: ƒ}
  // greaterThan10[Scopes]: Closure(greaterThan): (greaterThan) {n: 10}