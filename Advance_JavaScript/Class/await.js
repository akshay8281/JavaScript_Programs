let secondsTaken=0

const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{ secondsTaken=secondsTaken+1;resolve()},1000)
})

async function myfunction(){
    await myPromise
    console.log("[+]Time taken : "+secondsTaken)
    if(secondsTaken>10){
        return Promise.reject()
    }else{
        return Promise.resolve()
    }
}

myfunction().then(()=>{myfunction()}).catch((e)=>console.log("Timer Finished"))



