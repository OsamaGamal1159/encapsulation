
class User{
    //Private Property
    #e;
    constructor(name,id,esalary){
        this.n=name;
        this.i=id;
        this.#e=esalary;
    }

    getSalary(){
        return parseInt(this.#e);
    }
};

let newUser=new User("Osama",20,51951);

console.log(newUser.n);
console.log(newUser.getSalary()*.3);
