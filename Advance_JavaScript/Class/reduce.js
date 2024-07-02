const arr=[100,125,160,500,300,100]



const finalAmount = arr.reduce((total,item)=>{
    return total-item
},10000)

console.log(finalAmount)