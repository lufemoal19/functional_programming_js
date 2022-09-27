// Copy an array
const array = [4,6,3,2,1,9,7,4,5,6]

// Slice
let copy0 = array.slice(0)

// Spread operator ...
let copy1 = [...array]

// Reduce
let array_copy0 = my_array => my_array.reduce((current, value) => current.concat(value), [])
let array_copy1 = my_array => my_array.reduce((current, value) => [...current, value], [])

// REST: condence multiple elements into an array
const multiply = (multiplier, ...args) => args.map(element => multiplier * element)

let copy0_test = array_copy0(array);
let copy1_test = array_copy1(array);

console.log(`Original array: ${array}`)
console.log('------------------------------------')
console.log(`Array copy: ${copy0_test}`)
console.log(`Array copy: ${copy1_test}`)
console.log('------------------------------------')
console.log('Changes on copy')
copy0_test.push(12)
copy1_test.push(10)
console.log('------------------------------------')
console.log(`Original array: ${array}`)
console.log('------------------------------------')
console.log(`Array copy: ${copy0_test}`)
console.log(`Array copy: ${copy1_test}`)
console.log('------------------------------------')
console.log('Other copies')
console.log('------------------------------------')
console.log(`Copy 0: ${copy0}`)
console.log(`Copy 1: ${copy1}`)
console.log(`Copy 2: ${multiply(2,array)}`)

