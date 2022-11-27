//Classes 

//This is how we create class
class Person{
    constructor(name, age, isWorking){
        this.name = name;
        this.age = age;
        this.isWorking = isWorking
    }
}


//This is how we pass values inside a class
const user = new Person('Suraj',22,false);
const user1 = new Person('Kiran',20,false);
const user2 = new Person('Mangal',40,false);
const user3 = new Person('Bhagwan',52,true);
const user4 = new Person('Prajakta',22,false);
console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);