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


const mapArray=humanList.map((item)=>{
    if(item.age>=18){
        item.name="x"
    }
    return item
})

console.log(mapArray)

