const outer = (a: number) => {
  return (b: number): number => {
    return a + b;
  }
}

const c = outer(1)
console.log(c)
console.log(c(5))

const aa = (wee) => {
  wee
}
let bb = (cat) => {
  console.log(cat)
}
aa(bb("fat"))
