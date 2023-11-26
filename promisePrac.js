function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}

let thisPromise = new Promise(function(resolve,reject){
    setTimeout(() => {resolve("Today is Wednesday")
        
    }, 3000);
});

myPromise.then(
    function(value){myDisplayer(value)},
    function(error){myDisplayer(error)}
);
