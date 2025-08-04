
class reverseArray {
  constructor() {
    this.#reverse([45, 85, 14, 20, 13, 8])
  }


  #reverse(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      var minimum = i
      for (var j = i + 1; j < arr.length; j++) {

        if (arr[j] < arr[minimum]) {
          var minimum = j
        }
      }
      if (minimum !== i) {
        let temp = arr[i];
        arr[i] = arr[minimum];
        arr[minimum] = temp;
      }
      console.log(arr); 
    }

      console.log(arr); 



  }
} 