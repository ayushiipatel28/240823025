function isArmstrong(num) {
    const str = num.toString();
    const digits = str.length;
    let sum = 0;
  
    for (let i = 0; i < digits; i++) {
      sum += Math.pow(parseInt(str[i]), digits);
    }
  
    return sum === num;
  }
  
  const number = 153;
  console.log(isArmstrong(number) ? `${number} is Armstrong` : `${number} is not Armstrong`);
  