document.writeln('0'==0)
document.write(!!'0')
document.getElementById('px').innerHTML=0=='0';
const inputHandler =(event)=>{
    console.log('event',event);
}

let car=[
    {id:1, name:"Maruti"},
     {id:2, name:"Toyota"},
     {id:3, name:"Honda"}
     ]
console.log('cars',car);
let  newCars= car.splice(0);
console.log('new car length',newCars.length);
console.log('car length',car.length);
document.getElementById('in1').addEventListener('change',inputHandler);

