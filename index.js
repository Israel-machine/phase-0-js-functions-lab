function calculateTax(amount) {
    let taxValue = amount * .1 ;
    return taxValue;
}
console.log(calculateTax(100));

function convertToUpperCase(text) {
   let upperCase = text.toUpperCase();
   return upperCase;
}
console.log(convertToUpperCase("hello"));

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
};

console.log(findMaximum(2, 100));

function isPalindrome(word) {
    const palindromArray = word.split('');
    const reversedArray = palindromArray.reverse()
    const reversedPalindrome = reversedArray.join(''); 

    if (word == reversedPalindrome) {
        return true;
    } else if (word != reversedPalindrome) {
        return false;
    }
};

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let newPrice = originalPrice - discountPercentage 
    return newPrice;
}

console.log(calculateDiscountedPrice(1000,250))
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };