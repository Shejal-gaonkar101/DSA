class Hashing{

    constructor() {
        this.#func()
    }

    #func() {
        let arr = [4, 5, 6, 3, 4, 3, 1, 4]
        let ch = 4
        const hasharr = new Array(10).fill(0)
       
        function hash(ch, arr) {
            
            for (let i = 0; i < arr.length; i++) {
                if(arr[i]==ch){
                hasharr[ch] += 1
                }
            }
        }
        hash(ch,arr)
        console.log(hasharr);
    }
}
