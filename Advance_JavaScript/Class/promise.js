console.log("Welcome");


const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const orderReady=true;
        if(orderReady){
            resolve()
        }
        else{
            reject()
        }
    },5000)
})


myPromise.then(()=>{console.log("Food Ready")}).catch(()=>{"Food Failed"})
