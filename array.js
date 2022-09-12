array = [7,3,5,9,1,2,4,9,6]

let array_add = my_array => my_array.reduce((add, element) => add + element, 0);
let array_mul = my_array => my_array.reduce((mul, element) => mul * element, 1);

let array_min = my_array => Math.min(...my_array)
let array_max = my_array => Math.max(...my_array)

let array_min_reduce = my_array => my_array.reduce((a, b) => Math.min(a, b))
let array_max_reduce = my_array => my_array.reduce((a, b) => Math.max(a, b))

console.log(`Array: ${array}`)
console.log(`Array add: ${array_add(array)}`)
console.log(`Array mul: ${array_mul(array)}`)
console.log(`Array min: ${array_min(array)}`)
console.log(`Array max: ${array_max(array)}`)
console.log(`Array min: ${array_min_reduce(array)}`)
console.log(`Array max: ${array_max_reduce(array)}`)