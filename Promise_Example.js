console.log('Promise 1')

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2')
    resolve('Succeeded')
  }, 2000)
})

myPromise
  .then(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          console.log('Promise 3')
        }, 2000)
      )
  )
  .then(() => {
    console.log('Promise 4')
  })
  .catch(() => {
    console.log('Error')
  })
