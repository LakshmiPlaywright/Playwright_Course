
function lastwordlength (inputword)
{
let arrayOfWords = inputword.trim().split(" ")
console.log(arrayOfWords);
let numberOfWords = arrayOfWords.length
console.log(numberOfWords);

let selectedword=arrayOfWords[numberOfWords-1].length;
console.log(selectedword);

}

lastwordlength("hellow world");
lastwordlength(" fly me to the moon ");


//Input: isAnagram('Listen', 'Silent')
function AnagramCheck(givenword1,givenword2)
{
 givenword1 = givenword1.replace(/\s+/g, '').toLowerCase();
 console.log(givenword1);
 
 givenword2 = givenword2.replace(/\s+/g, '').toLowerCase();
 console.log(givenword2);

 if (givenword1.length != givenword2.length)
 {
    return false;
}
const sortedword1=givenword1.split('').sort().join('');
const sortedword2=givenword2.split('').sort().join('');

    return (sortedword1 === sortedword2);

}

console.log(AnagramCheck('Silent','Listen'));
console.log(AnagramCheck('Hello','World'));