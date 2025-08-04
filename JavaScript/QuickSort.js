class QuickSort {
    constructor() {
        let arr = [4, 6, 2, 9, 1, 8, 3, 5, 7]
        this.#QuickSort(arr, 0, arr.length - 1)
        console.log(arr);

    }
    #QuickSort(arr, low, high) {
        if (low < high) {
            var partition = this.#pivotfnc(arr, low, high)
            this.#QuickSort(arr, low, partition - 1)
            this.#QuickSort(arr, partition + 1, high)
        }
    }
    #pivotfnc(arr, low, high) {
        var pivot = arr[low]
        let i = low
        let j = high

        while (i < j) {
            while (pivot >= arr[i] && i <= high) {
                i++
            }
            while (pivot <= arr[j] && j >= low) {
                j--
            }
            if (i < j) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }


        }
        let temp1= arr[low]
        arr[low]=arr[j]
        arr[j]=temp1
         console.log(arr);
        return j
    }
}