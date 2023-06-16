// console.log(y)

// x = 10;
// console.log(x)
// var y = 20;
// var x;

// arr1 = [1,2,3,4,5,6,7,8,9]
// arr2 = [11,12,13,14,15,16,17,18,19]
// let a = [...arr1,10, ...arr2, 20]

// console.log(a)

class Test {
  __passingNo = 30;
  constructor() {
    // console.log("Test constructor is invoked.")
  }
  show() {
    console.log("This is show method of Test");
  }
}

class FinalTest extends Test {
  constructor(topic, marks) {
    super();
    (this.topic = topic), (this.marks = marks);
    // console.log("Final constructor is invoked."  )
  }
  show() {
    console.log("This is show method of FinalTest");
  }
  // show(name){
  //     return `Name: ${name}\nSubject: ${this.topic}\nMarks: ${this.marks}\nPass: ${this.__passingNo}`
  // }
}

// let obj1 = new FinalTest("Math", 100)
// // console.log(obj1.__passingNo)
// console.log(obj1.show("Vivek"))
// obj1.show()

class Calculater1 {
    add(a, b) {
        return a + b;
    }
}

class Calculater2 {  
    // add(a, b, c) {
    //   return a + b + c; 
    // }

}

class Calculater3 extends (Calculater1,  Calculater2) {

}

let cal = new Calculater3()

console.log(cal.add(1,2))


