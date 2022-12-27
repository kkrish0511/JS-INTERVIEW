//!-----this keyword----------
//?this keyword refers to which object it belongs to.
//? 1>implicit binding
let obj = {
    ename: "sachi",
    about:function() {
        return `${this.ename}`;
    }
}
console.log(obj.ename);


//?----explicit binding---------- //
let ename="shyam"
function sayName() {
    console.log(`my name is ${this.ename}`);
}
sayName();  
sayName.call(obj)

function emp(sal,id) {
    this.Sal = sal;
     this.Id=id   
}
let Employee = new emp(2000, 8)
console.log(Employee);








