//Finding largest in an array 
// let arr = [5,4,2,3,2,1]
// function findLargest (arr){
//   let largest = arr[0]
//    for(let i =0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i]
//     }
//    }
//    return largest 
// }

// console.log(findLargest(arr));

// Second largest element in an array 

let arr1 = [5,4,2,3,2,1]
function findLargest (arr){
  let largest = arr[0]
   for(let i =0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
   }
  let secoondLargest = -1
   for(let i = 0;i<arr.length;i++){
    if(arr[i]>secoondLargest && arr[i]<largest)
    {
        secoondLargest=arr[i]
    }
   }

   return secoondLargest 
}

console.log(findLargest(arr1));

// Check if the array is sorted or not 
let arr3=[1,2,3,4,5,6]
function check(arr){
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            console.log("false");
            
        }
    }
}
check(arr3)

// removing duplicates from array 
let arr4=[1,1,1,2,2,3,3,3,3]
function removeDuplicates(arr){
    for ( let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]!=arr[j]){
                j++
            }
        }
    }
}