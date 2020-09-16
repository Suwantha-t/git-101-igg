const { element } = require("prop-types")

// for( let i = 1; i <= 20 ; i+=1) {
//     console.log(i)
// }

// let tempo = ['apple', 'banana' , 'kiwi']
// // tempo.forEach((element, idx) => {
// //     console.log(idx, element)
// // });

// let newValue = tempo.map((element, idx) => { 
//     return `${idx}.${element}`

// })
//     // console.log(element))
// console.log(newValue)

let filterMoreThanZero = [ -1, -2, -3, -56, -6, -93, 0, 4].filter(el => el >= 0)
    console.log(filterMoreThanZero)