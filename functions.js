/*one way to make object*/
var car= {
    model : "maruti",
     make : 2020, 
     colour: "metallic",
  maxspeed: function(){
   return "120 kms/hr";

  }
}


function getmaxspeed()
{
   let element2  =document.querySelector('p');
   element2.textContent="Max speed of car is : " + car.maxspeed();
}de3flm