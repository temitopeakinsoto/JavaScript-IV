/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// TASK 1 REFACTORING STARTS FROM HERE
class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    };
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old`;
    };
    eatEdibles(food) {
        this.stomach.push(food);
    };
    poop() {
        this.stomach.pop();
    }
}


//TASK 2 REFACTORING STARTS FROM HERE

class Car {
    constructor(model, name, make) {
        this.carModel = model;
        this.carName = name;
        this.carMake = make;
        this.odometer = 0;
        this.canBeDriven = true;
    }
    drive(distanceDriven) {
        if (this.canBeDriven === true) this.odometer += Number(distanceDriven);
    }
    crash() {
        // Make car undrive-able, as it it's just been crahsed!
        this.canBeDriven = false;
        console.log(`I crahsed ${this.odometer} miles!`);
    }
    repair() {
        //restore car'r drivability.
        this.canBeDriven = true;
    }
}
//   var myCar = new Car("benz-convertible", "c-class", "benz");
//   console.log(myCar);
//   myCar.drive(25);
//   console.log(myCar);
//   myCar.crash();// restores canBeDriven state back to FALSE
//   console.log(myCar.canBeDriven);//FALSE
//   myCar.repair();// restore canBeDriven state back to TRUE
//   console.log(myCar.canBeDriven);//TRUE


//TASK 3 REFACTORING STARTS FROM HERE

class Baby extends Persons {
    constructor(name, age, favoriteToy) {
        super(name, age);
        this.favoriteToy = favoriteToy;
    }
    play() {
        return `I am playing with my ${this.favoriteToy}`;
    }
}

//   var kiddo = new Baby("mary", 3, "babyDoll");
//   console.log(kiddo);//Baby {name: "mary", age: 3, stomach: Array(0), favoriteToy: "babyDoll"}
//   console.log(kiddo.greet());//Hello, my name is mary, I am 3 years old
//   kiddo.eatEdibles("milk");
//   console.log(kiddo.stomach);// outputs ["milk"]
//   kiddo.poop();
//   console.log(kiddo.stomach);//outputs [];


//   //*********** */TASK 4***********/
//   /*
  //first constructor function REFACTOR 

  class Fruit {
      constructor(fruitName, fruitType, fruitRating){
        this.name = fruitName;
        this.type = fruitType;
        this.rating = Number(fruitRating);
        this.isTasty = false;
      }
      eatFruit() {
        return `${this.name} is very TASTY!`;
      }
  }
  //var newFruit = new Fruit("banana", "berry", 30);
  //console.log(newFruit);
  //console.log(newFruit.eatFruit());


  class Students {
      constructor (nameOfStudent, ageOfStudent, scoreOfStudent){
        this.studentName = nameOfStudent;
        this.studentAge = Number(ageOfStudent);
        this.studentScore = scoreOfStudent;
        this.isPromoted = false;
      }
      writeExam() {
        if(this.studentScore > 70){
            this.isPromoted = true;
            return `Congratulations ${this.studentName}, You passed your exam`;
          } 
      }
  }

  //var newStudent = new Students("tunde", 30, 79);
  //console.log(newStudent);//{studentName: "tunde", studentAge: 30, studentScore: 79, isPromoted: false}
  //console.log(newStudent.writeExam());//prints out "Congratulations tunde, You passed your exam" also sets this.isPromoted to TRUE
  //console.log(newStudent);//Students {studentName: "tunde", studentAge: 30, studentScore: 79, isPromoted: true}



  class Employee {
      constructor(name, educationStatus, workExperience){
        this.employeeName = name;
        this.employeeEducationStatus = educationStatus;
        this.employeeWorkExperience = workExperience;  
        this.isExperienced = false;
      }
      getLevelOfExperien() {
        if(this.employeeWorkExperience > 0){
            this.isExperienced = true;
            return (`You have ${this.employeeWorkExperience}yr work  experience`);
          }
          console.log(`Sorry, You have ${this.employeeWorkExperience}yr work  experience`);
      }
  }
  //const intern = new Employee("newGuy", "b.sc", 1);
  //console.log(intern);
  //const intern2 = new Employee("freshGrad", "b.sc", 0);
  //console.log(intern2);
  //console.log(intern.getLevelOfExperien());// prints out 'You have 1yr work  experience'
  //console.log(intern2.getLevelOfExperien());//prints out 'Sorry, You have 1yr work  experience'


//     STRETCH TASK

//     Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
//     In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
//     At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

//     Each constructor function has unique properties and methods that are defined in their block comments below:
//   */


//   /*
//     === GameObject ===
//     * createdAt
//     * name
//     * dimensions (These represent the character's size in the video game)
//     * destroy() // prototype method that returns: `${this.name} was removed from the game.`
//   */

//   function GameObject(createdAt, name, dimensions) {
//     this.createdAt = createdAt;
//     this.name = name;
//     this.dimensions = dimensions;
//   }

//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   }

//   /*
//     === CharacterStats ===
//     * healthPoints
//     * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//     * should inherit destroy() from GameObject's prototype
//   */
//   function CharacterStats(healthPoints) {  
//     GameObject.call(this, healthPoints);
//     this.healthPoints = healthPoints; 
//     console.log(this);
//   }

//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   }

//   var some = CharacterStats(20);
//   some.takeDamage();
//   /*
//     === Humanoid (Having an appearance or character resembling that of a human.) ===
//     * team
//     * weapons
//     * language
//     * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//     * should inherit destroy() from GameObject through CharacterStats
//     * should inherit takeDamage() from CharacterStats
//   */
//   function Humanoid() {
//     this.team = team;
//     this.weapons = weapons;
//     this.language = language;
//     CharacterStats.call()
//   }

//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   }

//   /*
//     * Inheritance chain: GameObject -> CharacterStats -> Humanoid
//     * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//     * Instances of CharacterStats should have all of the same properties as GameObject.
//   */

//   // Test you work by un-commenting these 3 objects and the list of console logs below:

//   /*
//     const mage = new Humanoid({
//       createdAt: new Date(),
//       dimensions: {
//         length: 2,
//         width: 1,
//         height: 1,
//       },
//       healthPoints: 5,
//       name: 'Bruce',
//       team: 'Mage Guild',
//       weapons: [
//         'Staff of Shamalama',
//       ],
//       language: 'Common Tongue',
//     });
//     const swordsman = new Humanoid({
//       createdAt: new Date(),
//       dimensions: {
//         length: 2,
//         width: 2,
//         height: 2,
//       },
//       healthPoints: 15,
//       name: 'Sir Mustachio',
//       team: 'The Round Table',
//       weapons: [
//         'Giant Sword',
//         'Shield',
//       ],
//       language: 'Common Tongue',
//     });
//     const archer = new Humanoid({
//       createdAt: new Date(),
//       dimensions: {
//         length: 1,
//         width: 2,
//         height: 4,
//       },
//       healthPoints: 10,
//       name: 'Lilith',
//       team: 'Forest Kingdom',
//       weapons: [
//         'Bow',
//         'Dagger',
//       ],
//       language: 'Elvish',
//     });
//     console.log(mage.createdAt); // Today's date
//     console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//     console.log(swordsman.healthPoints); // 15
//     console.log(mage.name); // Bruce
//     console.log(swordsman.team); // The Round Table
//     console.log(mage.weapons); // Staff of Shamalama
//     console.log(archer.language); // Elvish
//     console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//     console.log(mage.takeDamage()); // Bruce took damage.
//     console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
//   */


