// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function(window){
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
var helloSpeaker = {};
// the "speak" method and which you will expose to the global context
var speakword = "Hello";
helloSpeaker.speak = function(name){
  console.log(speakword + " " + name);
};
window.helloSpeaker = helloSpeaker;

// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;)
}
)(window)
