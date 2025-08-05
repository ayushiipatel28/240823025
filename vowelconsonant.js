function checkChar(c) {
    c = c.toLowerCase();
    if ('aeiou'.includes(c)) {
      return 'vowel';
    } else {
      return 'consonant';
    }
  }
  
  console.log(checkChar('A')); 
 
  