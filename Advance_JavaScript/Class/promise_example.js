console.log("Line 1")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Line 2");
        resolve()
    }, 3000)
})

myPromise
    .then(() => 
        new Promise((resolve, reject) => setTimeout(() => {
            console.log("line3");
            resolve()
        }, 3000))
    )
    .then(() => { console.log("Line 4") })
    .catch(() => { console.log("error") })
    