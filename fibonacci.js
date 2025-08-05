function fibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    for(let i = 1; i < n; i++) {
      console.log(b);
      [a, b] = [b, a + b];
    }
  }
  
  fibonacci(5);
  