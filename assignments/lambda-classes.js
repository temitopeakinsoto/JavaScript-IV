// // CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

const pal = {
    name: "Eben",
    age: 60,
    location: "Lagos"
}
class Person2 {
    constructor(data){
        this.name = data.name;
        this.age = Number(data.age);
        this.location = data.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

//var newLambdaStudent = new Person2("James Bond", 32, "Lagos, Nigeria");
//console.log(newLambdaStudent);
//var lamStudent = new Person2(pal);
//console.log(lamStudent);

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

const infoForInstructor = {
    name: "Eben",
    age: 60,
    location: "Lagos",
    specialty: "React",
    favLanguage: "Python",
    catchPhrase: "Eyes on You!!! Muahahahaha!!!"
}
class Instructors extends Person2 {
    constructor(data){
        super(data);
        this.specialty = data.specialty;
        this.favLanguage = data.favLanguage;
        this.catchPhrase = data.catchPhrase;

    }
    demo(subject) {
        console.log("Today, were are learning about " + subject);
    }
    grade(student, subject) {
        console.log(student.name + " receives a perfect score on " + subject);

    }
}

const newInstructor = new Instructors(infoForInstructor);
console.log(newInstructor);
//newInstructor.demo("Advanced Css");//Today, were are learning about Advanced Css
//newInstructor.grade(pal, "Advanced Css");//Eben receives a perfect score on Advanced Css
//newInstructor.speak();//Hello, my name is Eben, I am from Lagos


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person2{
    constructor(data) {
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(individualSubject){
            console.log(individualSubject);
        });
    }
    PRAssignment(subject) {
        console.log(this.name + " has submitted a PR for " + subject);
    }
    sprintChallenge(subject) {
        console.log(this.name + " has begun sprint challenge on " + subject);
    }
}

const palForStudent = {
    name: "Ayomide",
    age: 30,
    location: "Lagos",
    previousBackground: "Marketing",
    className: "WEBEU3",
    favSubjects: ['Html', 'CSS', 'JavaScript']
}

//const newStu = new Student(palForStudent);
//console.log(newStu);
//newStu.listsSubjects();//prints html, CSS, JavaScript each on a new line
//newStu.PRAssignment("react-redux");//Ayomide has submitted a PR for react-redux
//newStu.sprintChallenge("advanced javascript");//Ayomide has begun sprint challenge on advanced javascript



// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructors {
    constructor(data) {
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(slackChannel) {
        console.log(this.name + " announces to " + slackChannel + " @channel, it's STAND UP TIME!!!");
    }
    debugsCode(studentObject, subject) {
        console.log(this.name + " debugs " + studentObject.name + "'s code on " + subject);
    }

}
const infoForProjectManagers = {
    name: "Emily",
    age: 28,
    location: "Lagos",
    specialty: "React",
    favLanguage: "Python",
    catchPhrase: "Eyes on You!!! Muahahahaha!!!",
    gradClassName: "Web EU3 Cohort",
    favInstructor: "Gabriel"
}

//const myPM = new ProjectManagers(infoForProjectManagers);
//console.log(myPM);//prints ProjectManagers {name: "Emily", age: 28, location: "Lagos", specialty: "React", favLanguage: "Python", …}
//myPM.standUp("webEU3_Help channel");//prints Emily announces to webEU3_Help channel @channel, it's STAND UP TIME!!!
//myPM.debugsCode(pal, "Html 5");//prints Emily debugs Eben's code on Html 5
