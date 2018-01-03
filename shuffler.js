// To run this, execute 'node shuffler.js' in your terminal (tested on node 6.10).
// Alternatively, you could copy-paste the code up until the line "// End of solution code" and run it in Chrome's dev console.

// First, we'll make a quick function to generate an ordered sequence of ints from to 1 to count, using some nice new ES6 goodness:
const makeSequence = count => Array.from(new Array(count), (val, index) => index + 1);

// console.log(makeSequence(10)); // uncomment the lines like this if you want to see intermediate checks

// Now let's make a little helper around Math.random() to give us a nice pseudorandom int instead of a float between 0 and 1:
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// console.log(getRandomInt(1, 10000)); // ran it a few times, seems good

// To put the sequential values in a random order we can make a function that shuffles using position swaps.
// This function mutates the supplied values array.
const shuffle = values => {
  let maxIndex = values.length - 1; // we're going to be updating this maxIndex as we go.  it's a dividing line between the shuffled and unshuffled segments.  you'll see.

  // Reverse for loop.  The given values array is going to get shuffled back to front.
  for (let i = maxIndex; i >= 0; i--) {
    // Store value at current position on the right side of the array:
    let currentVal = values[i];

    // Choose a random element from the left (not yet sampled) part of the array:
    let sampleIndex = getRandomInt(0, maxIndex); // aside: by fluke this could sometimes choose the same item, which is OK (e.g. when shuffling the ints 1 through 10,000 we need a small possibility of 10,000 still being the last number after the shuffle is done)

    // Swap the randomly chosen value with the one in the current position:
    values[i] = values[sampleIndex];
    values[sampleIndex] = currentVal;

    maxIndex--; // next time we sample it will be from the "shorter" left side of the array (the numbers currently unsampled)
  }
  return values;
}

const generateShuffledNumbers = count => shuffle(makeSequence(count));

console.log(generateShuffledNumbers(/*count:*/ 15)); // change the count to 10000 if you want to see your console spammed with numbers

// End of solution code.


// For fun, there's nothing special about shuffling numbers with our shuffle(values) function because it just swaps values around.  We should be able to randomize the ordering of any values, like word strings:
console.log(shuffle(['dog', 'cat', 'elephant', 'mouse', 'lion', 'tiger', 'liger', 'chupacabra']));

// Back to numbers.  Some quick sanity tests (this part needs node.js).
const assert = require('assert');

assert.deepStrictEqual(generateShuffledNumbers(9).sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9], /*error message:*/ 'after sorting we do NOT get back the original sequence!');

// Gauss figured out as a young child that the sum of [1..n] is always n(n+1)/2.  For some reason sum([1..100]) == 5,050 is burned into my brain.
// Sanity checking the sum of all the numbers doesn't 100% guarantee that the code didn't screw up (for example a generated array of [0,0,0,...,5050] would pass), but if it doesn't pass we know something's up.
const sumItUp = nums => nums.reduce((sum, current) => sum + current);
assert(sumItUp(generateShuffledNumbers(100)), 5050, /*error message:*/ 'sum does NOT add up to what it should be!');

// That was fun, let's do it for 10,000:
assert(sumItUp(generateShuffledNumbers(10000)), 50005000, /*error message:*/ 'sum does NOT add up to what it should be on the big list of nums!');
