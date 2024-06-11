// call back syncronous

function main (param1,param2,callback){    // calback ini adalah parameter untuk diisi oleh sebuah function
console.log(param1,param2)
callback()
}
function mycallback() {       // ini adalah function yang akan nantinya diisikan ke parameter function call cback
    console.log('hello callback')
}
main(1,2,mycallback)


// call back Asyncronous

// function p1() {
//     console.log('p1 done')
// }

// function p2() {
//     setTimeout (
//         function() {
//     console.log('p2 done')
//         },100
//     )
// }

// function p3() {
//     console.log('p3 done')
// }

// p1()
// p2()
// p3()

