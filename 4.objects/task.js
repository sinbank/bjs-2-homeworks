function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
const Student1 = new Student ();
const Student2 = new Student ();

Student.prototype.setSubject = function (subjectName) {
this.subjectName = subjectName;
}

Student.prototype.addMark = function(mark) {
if ( this.marks === undefined) {
this.marks = [mark]; 
} else {
this.marks.push(mark); 
}
}

Student.prototype.addMarks = function(...marks) {
  this.marks.push(marks);
}

Student.prototype.getAverage = function(marks) {
  let sum = 0;
   for (let i = 0 ; i < this.marks.length; i++) {
     sum = sum + this.marks [i];
   }
     this.getAverage = sum / this.marks;
}

//Student.prototype.getAverage = Student.marks.reduce((acc, item, idx, //arr) => {
//    if (idx === arr.lenght - 1) {
//      return (acc + item) / arr.length;
//    }
//   else {
//       return (acc + item)
//    }
//  },0);

Student.prototype.exclude = function(reason) {
  this.reason = [reason]; 
  if ( this.reason !== undefined) {
  delete Student.subjectName;
  delete Student.marks;
  Student.exclude = reason
  }
}
let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); //4.6666
console.log(student1);
//console.log(student1.marks);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2);
