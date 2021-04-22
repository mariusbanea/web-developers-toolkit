//splice() changes the original array whereas slice() doesn't but both of them returns array object.

//splice
let array=[1,2,3,4,5];
console.log(array.splice(2));

//This will return [3,4,5]. The original array is affected resulting in array being [1,2].


//slice
let array2=[1,2,3,4,5]
console.log(array2.slice(2));

//This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].

console.log("----after-----");
console.log(array);
console.log(array2);
