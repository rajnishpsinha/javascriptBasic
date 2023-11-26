/**
 * @param {number} n
 * @return {number}
 */
let result =0;
var climbStairs = function(n) {
    console.log('number is:',n);
    let numerator = 0;
    let factorialValue =1;
    let givenNumber=n;
    while (givenNumber > 0){
        factorialValue = factorialValue*givenNumber;
        givenNumber--;
    //    console.log('factorialValue: ',factorialValue);
    }
    result=factorialValue;
};

const showValue= function(){
    let factNo=document.getElementById("in2").valueAsNumber;
    climbStairs(factNo);
    console.log('result',result);
    document.getElementById("in1").valueAsNumber=result;
}

const button1= document.getElementById("btn1");
button1.addEventListener("click",showValue);