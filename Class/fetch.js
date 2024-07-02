const apiUrl = "https://jsonplaceholder.typicode.com/todos/"


fetch(apiUrl)
.then((r)=> r.json()).then((r)=>{


    r.forEach(element => {
        console.log(element.title)
    });

})
.catch((e)=>console.log(e))