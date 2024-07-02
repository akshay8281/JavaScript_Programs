const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Akshay')
    reject('Some Error Detected....')
  }, 3000)
})

async function retAync () {
  const myName = await myPromise
  console.log(myName)
  return Promise.resolve(myName)
}

retAync()
  .then(value => {
    console.log('Then Block - Last Line :',value)
  })
  .catch(err => {
    console.log(err)
  })
