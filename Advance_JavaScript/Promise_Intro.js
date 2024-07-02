function asyncFunc () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('AsyncFunc Data 1')
      resolve('Successfully')
    }, 2000)
  })
}

console.log('Fetching Data 1...')

let p1 = asyncFunc()
p1.then(res => {
  console.log(res)
  console.log('Fetching Data 2...')

let p2 = asyncFunc()
p2.then(res => {
  console.log(res)
})

})


