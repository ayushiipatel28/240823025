function isPalindrome(num){
    let str=num.toString();
    if(str===str.split('').reverse().join('')){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
}
isPalindrome(11);