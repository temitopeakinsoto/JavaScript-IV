/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.

  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.

  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.

  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!

*/




// SOLUTIONS TO TASKS 1 - 4 FROM YESTERDAY 

//****** */TASK 1: **********/
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  
  Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}, I am ${this.age} years old`;
  }
  Person.prototype.eatEdibles = function(food){
   this.stomach.push(food);
  }
  Person.prototype.poop = function(){
    this.stomach.pop();
  }

  
//   // var Tope = new Person("Temitope", 33);
//   //  console.log(Tope);
//   //  Tope.eatEdibles("rice");
//   //  console.log(Tope.stomach)//["rice"];
//   //  Tope.poop("rice");
//   //  console.log(Tope.stomach);//[] empty array
  
//   //************ */TASK 2 **********/
//   function Car (model, name, make) {
//     this.carModel = model;
//     this.carName = name;
//     this.carMake = make;
//     this.odometer = 0;
//     this.canBeDriven = true;
//   }
  
//   Car.prototype.drive = function(distanceDriven){
//     if(this.canBeDriven === true) this.odometer += Number(distanceDriven);
//   }
//   Car.prototype.crash = function(){
//     // Make car undrive-able, as it it's just been crahsed!
//     this.canBeDriven = false;
//     console.log(`I crahsed ${this.odometer} miles!`);
//   }
//   Car.prototype.repair = function(){
//     //restore car'r drivability.
//     this.canBeDriven = true;
//   }
  
//   //var firstCar = new Car("CAMRY", "MUSCLE", "TOYOTA");
//   //firstCar.drive(29);
//   //console.log(firstCar.odometer);
//   //firstCar.crash();//sets canBeDriven = false
//   //console.log(firstCar.crash());
//   //console.log(firstCar);
//   //console.log(firstCar.repair());
  
  
//   //********** */TASK 3************/
//   function Baby(name, age, favoriteToy) {
//     Person.call(this, name, age);
//     this.favoriteToy = favoriteToy;
//   }
  
//   Baby.prototype = Object.create(Person.prototype);
  
//   // add ability for baby's to play
//   Baby.prototype.play = function () {
//     return `I am playing with my ${this.favoriteToy}`;
//   }
  
//   //var sonny = new Baby('Tom', 5, 'bicycle');
//   //console.log(sonny.greet());
//   //console.log(sonny.play());
  
  
//   //*********** */TASK 4***********/
//   //first constructor function
//   function Fruit (fruitName, fruitType, fruitRating) {
//     this.name = fruitName;
//     this.type = fruitType;
//     this.rating = Number(fruitRating);
//     isTasty = false;
//   }
  
//   Fruit.prototype.eatFruit = function(){
//     return `${this.name} is very TASTY!`;
//   }
//   //var newFruit = new Fruit("banana", "berry", 30);
//   //console.log(newFruit.eatFruit());
  
  
  
//   //second constructor function
//   function Students (nameOfStudent, ageOfStudent, scoreOfStudent) {
//     this.studentName = nameOfStudent;
//     this.studentAge = Number(ageOfStudent);
//     this.studentScore = scoreOfStudent;
//     this.isPromoted = false;
//   }
  
//   Students.prototype.writeExam = function(){
//     if(this.studentScore > 70){
//       this.isPromoted = true;
//       return `Congratulations ${this.studentName}, You passed your exam`;
//     } 
//   }
  
//   var student1 = new Students("Samuel", 22, 75);
//   //console.log(student1.writeExam());
//   //console.log(student1.isPromoted);
  
  
//   //third constructor function
//   function Employee(name, educationStatus, workExperience){
//     this.employeeName = name;
//     this.employeeEducationStatus = educationStatus;
//     this.employeeWorkExperience = workExperience;  
//     this.isExperienced = false;
//   }
  
//   Employee.prototype.getLevelOfExperien = function() {
//     if(this.employeeWorkExperience > 0){
//       this.isExperienced = true;
//       return (`You have ${this.employeeWorkExperience}yr work  experience`);
//     }
//     return isExperienced = false;
//   }
//   const intern = new Employee("newGuy", "b.sc", 1);
//   //console.log(intern);
//   console.log(intern.getLevelOfExperien());
  
  
  
//   /*
  
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
  
  
