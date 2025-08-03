class MergeSort {

    constructor() {
        let arr = [5, 6, 7, 1, 2, 8, 9, 7, 6, 5, 4, 2];
        this.#mergeSort(arr, 0, arr.length - 1);
       console.log("Sorted array:", arr);
    }

    #mergeSort(arr, low, high) {
        if (low >= high) return;
        let mid = Math.floor((low + high) / 2);

        this.#mergeSort(arr, low, mid);
        this.#mergeSort(arr, mid + 1, high);
        this.#merge(arr, low, mid, high);
    }

    #merge(arr, low, mid, high) {
        let newarr = [];
    let i = low;
    let j = mid + 1;

    // Merge two sorted halves
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            newarr.push(arr[i]);
            i++;
        } else {
            newarr.push(arr[j]);
            j++;
        }
           
   
    }

    // Copy remaining elements of left half
    while (i <= mid) {
        newarr.push(arr[i]);
        i++;
    }

    // Copy remaining elements of right half
    while (j <= high) {
        newarr.push(arr[j]);
        j++;
    }
  for (let k = 0; k < newarr.length; k++) {
    arr[low + k] = newarr[k];
}
    }
    

          

    
}

