function sum(...inputs){
    total=0
    inputs.forEach((item)=>{
        total+=item
    })
    console.log(total)
}


sum(1,2)

sum(1,2,3,4,5)