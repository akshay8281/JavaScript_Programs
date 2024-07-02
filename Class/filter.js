const humanList = [
    {
        name : "Nisarg",
        age:20
    },
    {
        name : "Priyanak",
        age:25
    },
    {
        name : "Kinjal",
        age:5
    },

]


const filteredArray=humanList.filter((item)=>{
    if(item.age>=18){
        return true
    }else{
        return false
    }
})

console.log(filteredArray)

