class Student {
   constructor(rno,fname,lname){
      this.rno = rno
      this.fname = fname
      this.lname = lname
      console.log('inside constructor')
   }
   get fullName(){
      console.log('inside getter')
      return this.fname + " - "+this.lname
   }
}
let s1 = new Student(101,'Sachin','Tendulkar')
console.log(s1)
//getter is called
console.log(s1.fullName)