function mergeArrays<T>(array1:T[] , array2:T[]):T[]{
    const finalarray = array1.concat(array2);
    return finalarray;
}

const firstarray = ["Jump", "Walk", "Run"];
const secondarray = ["Fly","Swim"];

console.log(mergeArrays(firstarray,secondarray));