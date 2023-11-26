function greet()
{console.log("Hello how are you!")};
//console.log(new Date("1516991400000"));
function getmonument(myCallBackMethod)
{
let request = new XMLHttpRequest();
request.open("GET",photo.html,true);
request.onload=function(){
    if (request.status==200)
    myCallBackMethod(this.responseText);
    else myCallBackMethod("error: "+request.status);
}
}

function myCallBackMethod(some){
    document.getElementById("demo").innerHTML = some;

}