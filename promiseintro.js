const first = function(){return 'one';}
const second=()=>{setTimeout(() => {return 'two';
    
}, 3000);}
const third=()=>{return 'three';}


const callthem=()=>{
 let varone=first();
 console.log(varone);
 let vartwo=second();
 console.log(vartwo);
 let varthree=third();
 console.log(varthree);
// as vartwo takes time and JS is synchronous language
// it orints default value of variable 'undefined'
}
callthem();