
let p = (prompt("what is the initial principal"))
let r = (prompt("what is the intersest rate"))
let n = (prompt("what is the number of times compounded per year"))
let t = (prompt("what is the number of years"))

let compound_interest = p * (1+r/n) ^ n*t

alert("The compound interest is: ," + compound_interest)