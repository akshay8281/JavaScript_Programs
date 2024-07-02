/// Pyramid of DOOM
/// Callback Hell
///Nested Callbacks

// function getData (dataID, getNextData) {
//   setTimeout(() => {
//     console.log('Data : ', dataID)
//     getNextData() /// Get Next Data
//   }, 1000)
// }

// getData(123, () => {
//   console.log('Fetching Dtaa 2...')
//   getData(456, () => {
//     console.log('Fetching Dtaa 3...')
//     getData(789, () => {
//       console.log('Fetching Dtaa 4...')
//       getData('ABC', () => {
//         console.log('Fetching Dtaa 5...')
//         getData('DEF', () => {
//           console.log('Fetching Dtaa 6...')
//           getData('GHI')
//         })
//       })
//     })
//   })
// })

// Promises

// function getData (dataID, getNext) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Data : ', dataID)
//       resolve("Successfully fetched")
//       reject("Some Error Detected")
//       if (getNext) {
//         getNext()
//       }
//     }, 4000)
//   })
// }

// getData(123)

/// * Promise Chaining or Chain of Promise *

// function getData (dataID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Data : ', dataID)
//       resolve('Successfully fetched')
//       reject('Some Error Detected')
//     }, 2000)
//   })
// }

// Method 1 Write a Code

// let p1 = getData(111)
// p1.then(res => {
//   console.log(res)
//   getData(222).then(() => {
//     console.log(res)
//     getData(333).then(() => {
//       console.log(res)
//     })
//   })
// })

// Method 2 wriuta a code

// console.log("Fetching Data 1...");
// getData(111).then(res => {
//     console.log("Fetching Data 2...");
//     return getData(222)
//     .then(res => {
//         console.log("Fetching Data 3...");
//         return getData(333)
//     })
//     .then(res => {
//       console.log(res)
//     })
// })

/// * Async Await Program

function getData (dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data : ', dataID)
      resolve('Successfully fetched')
      reject('Some Error Detected')
    }, 2000)
  })
}

async function gwtAllData () {
  console.log('Fetching Data 1....')
  await getData(111)
  console.log('Fetching Data 2....')
  await getData(222)
  console.log('Fetching Data 3....')
  await getData(333)
  console.log('Fetching Data 4....')
  await getData(444)
  console.log('Fetching Data 5....')
  await getData(555)

  console.log('*** End The Program ***')
}

gwtAllData()
