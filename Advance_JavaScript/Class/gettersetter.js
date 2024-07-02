class Human{

    name="Nisarg"
    age = 28
    #mob = "1234"   // private member
    get mobile(){
        return this.#mob
    }

}

const nisarg = new Human()
console.log(nisarg)

console.log(nisarg.mobile)


