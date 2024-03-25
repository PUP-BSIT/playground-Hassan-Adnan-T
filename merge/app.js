function mergeArrays(array1, array2) {
    var finalarray = array1.concat(array2);
    return finalarray;
}
var firstarray = ["Jump", "Walk", "Run"];
var secondarray = ["Fly", "Swim"];
console.log(mergeArrays(firstarray, secondarray));
