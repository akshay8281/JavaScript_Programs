let yourPromise = () => {
  return new Promise((resolve, reject) => {
    console.log('I am Promise')
    resolve('Successful')
    reject('Some Error Occuredf')
  })
}

let myPromise = yourPromise()
myPromise
  .then(res => {
    console.log('Promise Successful', res)
  })
  .catch(err => {
    console.log('Some Error Detected', err)
  })
