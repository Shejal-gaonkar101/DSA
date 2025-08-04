class Hashing{

    constructor() {
        this.#func()
    }

    #func() {
        let arr = [4, 5, 6, 3, 4, 3, 1, 4]
        let ch = 4
        let hasharr = []
        function hash(ch, arr) {
            for (let i = 0; i < arr.length; i++) {
                let num = arr[i]
                hasharr[num] += 1
            }
        }
        console.log(hasharr);
    }
}
