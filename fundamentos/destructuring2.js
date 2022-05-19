// Destructuring #2
// novo recurso do ES2015
// usando em um array
const [a] = [10]
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

// const [, [, nota]] = [[, 8, 8], [9, 6, 8]]  // exemple crazy não usual
// console.log(nota);

const [m1, , m3, m4, m5] = [n1,n3, n5, n6]
console.log(`me ` + m1, m3, m4, m5);
