const apiURL = "https://jsonplaceholder.typicode.com/posts";


fetch(apiURL)
.then((r) => { return r.json() })
.then((jsonResult) => { console.log(jsonResult) })
.catch((e) => { console.log(e) })

