/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
    if(numbers.length % 2 !== 0){
        return true;
    } else return false;
}
console.log(isArrayLengthOdd([1, 2, 3]))



  /**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
    if(numbers.length % 2 === 0){
        return true;
    } else return false;
  }
console.log(isArrayLengthEven([18, 7, 14, 59, 22]))



  /**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
const instructors = ["Mshary", "Hasan"];
function addLailaToArray(instructors) {
    instructors.push("Laila");
    return instructors;

  }
console.log(addLailaToArray(instructors));


/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
const teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
    teams.pop();
    return teams;
  }
  console.log(eliminateTeam(teams));


  
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
const fruits = ["cherry", "watermelon", "strawberry", "pear"];
function secondHalfOfArrayIfItIsEven(fruits) {
    const halfLength = fruits.length / 2;
    const empty = [];
    if(fruits.length % 2 === 0){
        return fruits.slice(halfLength);
    } else {
        return empty;
    }
  }
console.log(secondHalfOfArrayIfItIsEven(fruits));



/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */

function youGottaCalmDown(shout) {
    const shoutIndex = shout.indexOf("!");
    if(shoutIndex === -1){
        return shout
    } else {
        return shout.slice(0, shoutIndex+1)
    }
  }
  console.log(youGottaCalmDown("done!!!!!"));
