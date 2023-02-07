import { cloneobj } from '../src/index'

let x = [{
  ano: 1,
  elm: [1, 2, 3],
  page: {
    no: 3,
    wow() { }
  }
}]

let y = cloneobj(x)

x[0].page.no = 1111
x[0].elm[2] = 2222

console.log(x)
console.log(y)
