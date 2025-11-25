const string = 'I want to get an A in programming.';
console.log('Довжина рядка:', string.length);

function reverseString (stringPart){
    let result ='';
    for (let i = stringPart.length - 1; i >= 0; i--){
        result += stringPart[i]; 
    }
    return result;

}

function splitLineInHalf(str){
    const midIndex = Math.ceil(str.length / 2);
    const leftHalf = str.substring(0, midIndex);
    const rightHalf = str.substring(midIndex, str.length);
    
    const reversedLeftHalf = reverseString(leftHalf);

    const finalResult = reversedLeftHalf + rightHalf;

    console.log('Ліва частина (неперевернута):', leftHalf);
    console.log('Права частина (незмінна):', rightHalf);
    console.log('Перевернута ліва частина:', reversedLeftHalf);
    
    return finalResult;
}

const changedString = splitLineInHalf(string);
console.log('----------------------------');
console.log('Змінений рядок:', changedString);



