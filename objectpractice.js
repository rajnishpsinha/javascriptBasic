/* one way to create object*/
var car= {
    model : "maruti",
     make : 2020, 
     colour: "metallic",
  maxspeed: function(){
   return "120 kms/hr";

  }
}
/*second way to create object through constructors*/
function car(model,make,maxspeed)
{
  this.model=model;
  this.make=make;
  this.maxspeed=maxspeed
  this.maxspeed=function(){return "130 kms/hr"}
}
var nano= new car("tata",2020,);
var van = new car("omni",2004);
console.log(nano);
console.log(van);

/*third way however class here is a function, not the way
it use to be in oop programming*/
class User {
  constructor(firstName, lastName, dateOfBirth) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.dateOfBirth = dateOfBirth;

     this.getName = function(){
         return "User's name: " + this.firstName + " " + this.lastName;
     }
  }
}

var user001 = new User("John", "Smith", 1985);

/*4th way  THE OBJECT.CREATE() METHOD*/
var user001 = {
  firstName: "John",
  lastName: "Smith",
  dateOfBirth: 1985,
  getName: function(){
     return "User's name: " + this.firstName + " " + this.lastName;
  }
};

var user002 = Object.create(user001);
   
user002.firstName = "Jane";
user002.lastName = "King";
user002.dateOfBirth = 1989;


