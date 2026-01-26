let arr: number[] = [1, 2, 3, 4]
let cat: number[] = [...arr]
let dog: (number | number[])[] = [cat, ...arr]
let rat: (number[] | number)[] = [...cat, arr]
console.log(cat)
console.log(dog)
console.log(rat)

function eat(...cat: number[]): number[] {
  return cat
}

console.log(eat(14, 15, 16))
// console.log(eat("cat"))
const ate = async (): Promise<number> => {
  return arr.map((val: number, _): number => {
    return val
  })
}
console.log(ate())
