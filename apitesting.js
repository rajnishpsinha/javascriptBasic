
function showWeather(){
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
//one way to write listner
//   xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		//console.log(this.responseText);
       
//        let element2 =document.querySelector('p');
//        element2.innerHTML=this.responseText;
//     }
// });

 
/* another way to write listner */
xhr.onreadystatechange= function()  

  {
      //let element2=document.querySelector('p');
      //element2.innerHTML= xhr.responseText;
      if (xhr.readyState===4 && xhr.status===200){
     let element2 =document.querySelector('p');
        element2.innerHTML= this.responseText;
      }
 }


xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/current.json?q=Bangalore");
xhr.setRequestHeader("x-rapidapi-key", "140d64f136mshd9440620e7c907cp1fa10cjsn802a84b6a9c0");
xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");

xhr.send(data);
}