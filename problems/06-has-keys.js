/*
Write a function called hasKeys that takes in an object and an array of
strings. It should return true if all of the strings in the array are keys in
the object.
*/

// Your code here 
function hasKeys(obj, keys) {
  for (let i = 0; i < keys.length; i++) {
    if (!obj.hasOwnProperty(keys[i])) {
      return false;
    }
}
return true;

}



let survey = {
  name: 'Check',
  question: 'Satisfied?',
  choices: ['Yes', 'No']
}
console.log(hasKeys(survey, ['question', 'choices'])); // true
console.log(hasKeys(survey, ['numSubmitted', 'choices'])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = hasKeys;
} catch {}
