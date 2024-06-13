//q-1
const heading = "Quetion-1..";
document.getElementById('heading').innerHTML = " " + heading;

let student = document.getElementById('student');
let faculty = document.getElementById('faculty');
let peon = document.getElementById('peon');
class School {
    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    Student() {
        student.innerHTML += (`Student Name : ${this.name} </br> Email : ${this.email} </br> Contact : ${this.contact}`);
    }
    Faculty() {
        faculty.innerHTML += (`Faculty Name : ${this.name} </br> Email : ${this.email} </br> Contact : ${this.contact}`);
    }
    Peon() {
        peon.innerHTML += (`Peon Name : ${this.name} </br> Email : ${this.email} </br> Contact : ${this.contact}`);
    }
}
let s1 = new School("Ragini Rakholiya", "raginirakholiya123@gmail.com", 8980150444);
s1.Student();

let s2 = new School("Keyur Gohil ", "keyurgohil@gmail.com", 96547842132);
s2.Faculty();

let s3 = new School("Priya Patel", "piyupatel0987@gmail.com", 8849094711);
s3.Peon();


//q-2
const heading2 = "Quetion-2..";
document.getElementById('heading2').innerHTML = " " + heading2;

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    father() {
        father.innerHTML += (`Father Name = ${this.name} </br> Father Age = ${this.age} </br>`);
    }
    child() {
        child.innerHTML += (`Child Name = ${this.name} </br> Child Age = ${this.age} </br>`);
    }
}

const Father = new Person("Ketan", 60);
Father.father();
const Child = new Person("Rahul", 20);
Child.child();

// //q-3
const heading3 = "Quetion-3..";
document.getElementById('heading3').innerHTML = " " + heading3;

let message = document.getElementById('message');
class Employe{
    constructor() {
        message.innerHTML += "Happy Employee Appreciation Day..!!.";
    }
}
const employe = new Employe();

// //q-4
const heading4 = "Quetion-4..";
document.getElementById('heading4').innerHTML = " " + heading4;

class Shape {
    rectangle(width, height) {
        return width * height;
    }

    circle(radius) {
        return Math.PI * radius * radius;
    }
}
const myShape = new Shape();

const rectangleArea = myShape.rectangle(9, 10);
document.getElementById('rectangle').innerHTML = "Area of rectangle is : " + rectangleArea;

const circleArea = myShape.circle(2);
document.getElementById('circle').innerHTML = "Area of circle is : " + circleArea;
