let currtime = 0
let timeZone = currtime => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(currtime)
      resolve()
    }, currtime * 1000)
  })
}

async function myFunc () {
  const presentTime = []

  while (presentTime.length <= 10) {
    presentTime.push(timeZone(currtime++))
  }
  await Promise.all(presentTime)
}

myFunc()
