function skillsMember() {
    return {
        name: 'Bobby',
        age: 25,
        skills: ['JavaScript', 'React', 'Node'],
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
}