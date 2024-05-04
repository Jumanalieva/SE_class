function Person(name, age) {
    this.name = name;
    this.age = age;


    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

   
    this.addAge = () => {
        this.age += 1;
    };
}

let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

person1.printInfo();
person2.printInfo();

// Incrementing person1's age by 3 years
person1.addAge();
person1.addAge();
person1.addAge();

person1.printInfo();

