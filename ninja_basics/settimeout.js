console.log("Hello World"); // 1

setTimeout(function(){
  console.log("I am in the timeout function") // 2
}, 0)

// a = [1,......10000000]

// for (var i = A.length - 1; i >= 0; i--) {
// 	A[i]
// }

console.log("I am outside of the timeout"); // 3