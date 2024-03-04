/// Higher Order Function
function num (total) {
  let a = 10
  let b = 2

  console.log(total(a, b))
}

/// First Order Function
function sum (a, b) {
  return a + b
}

/// First Order Function
function subtract (a, b) {
  return a - b
}

/// First Order Function
function multi (a, b) {
  return a * b
}

/// First Order Function
function div (a, b) {
  return a / b
}

num(sum)
num(subtract)
num(multi)
num(div)
