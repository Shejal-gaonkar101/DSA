// console.log("hello");
// setTimeout(function(){
// console.log("hiii");
// },5000)

// console.log("time Out");

// //example of promise 
//  const cart = ["shoes","pants","kurtas"]
//  createOrder(cart,function(orderId){
//     proceedtopay(orderId)
//  })

// const promise =  createorder(cart)
// promise.then(function(orderId){
//     proceedtoPaymnet(orderId)
// })  

// Promise.catch(function(err){
//     console.log("error",err);
    
// })

//fetch()

const api = "https://dummy.restapiexample.com/api/v1/employees";
let data = fetch(api)

console.log(data );

//Creating an pormise 
function createOrder(cart){
const pr = new Promise(function(resolve ,reject){
    if(!data){
        const err = new console.error("data not foung");
        
        reject(err)
    }
    else{
        resolve(orderID =12454)
    }

})
}

//Promise chaining
//we have a cart 
const cart =["shoes","pants","kurtas"]
createOrder(cart)?.then(function(orderId){
    console.log(orderId)
})
.then(function(){
    proceedToPayment(orderId)
}).catch(function(err){
    console.log("error")
})

