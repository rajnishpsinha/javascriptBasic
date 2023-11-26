function calculateHCF(){
  //  let confirmation=window.confirm('Do you wish to proceed');   
  //  if(confirmation ===false) return;
    console.log(window.navigator.userAgent);
    console.log(window.location);
    //window.location.href = 'https://www.sitepoint.com/';
    console.log(window.history);
    console.log(window.Date.now());
    console.log('inside method: calculateHCF');
    let firstNumber = document.getElementById('fno').value;
    let secondNumber= document.getElementById('sno').value;
    
    console.log('firstNumber',firstNumber);
    let remainder= 1;
    let dividend= firstNumber;
    let divisor = secondNumber;
   // document.getElementById("finalno").value = "100";
  // consider firstNumber > secondNumber
  do{
   // let dividend = firstNumber;
   // let divisor = secondNumber;
     remainder= dividend % divisor;
      dividend = divisor;
      divisor=remainder;
  } 
  while(remainder!=0);

document.getElementById('finalno').setAttribute("value", dividend);  

}
// document.getElementById("case").style.display='block';
function checkBigNumber(){
  let firstNumber = document.getElementById('fno').value;
  if (firstNumber==null || firstNumber==NaN ||firstNumber==undefined )
  {
    firstNumber=0; 
  }
  let secondNumber= document.getElementById('sno').value;
  if (secondNumber==null || secondNumber==NaN ||secondNumber==undefined )
  {
    secondNumber=0; 
  }

  console.log('firstNumber',firstNumber);
  console.log('secondNumber',secondNumber);
  if(firstNumber<secondNumber){
    alert('first number should be bigger than second number');
  }


}
function calculateLCM(){


}
// grid making
const container = document.getElementById("container");

function makeRows(rows, cols) {
  console.log('make row function begin');
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

// makeRows(3, 3);

// const container = document.getElementById("container");

function makeGrid(numberArray) {
  console.log('make row function begin');
  container.style.setProperty('--grid-rows', numberArray.length);
  if(numberArray.length>0){
  container.style.setProperty('--grid-cols', numberArray[0].length);
}
  
  for (i = 0; i <numberArray.length; i++) {
     for(j=0; j<numberArray[i].length;j++){
    let cell = document.createElement("div");
    cell.innerText = (numberArray[i][j]);
    container.appendChild(cell).className = "grid-item";
  }
  };
};
let arrayNumbers = [[2,5,8],[11,45,87],[121,457,147]]

makeGrid(arrayNumbers);

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(arrayNos) {
  console.log('arrayNos',arrayNos);
    let length = arrayNos.length;
    console.log('length of array: ',length);
    //transpose the matrix
    let temp=0;
    for(i=0;i<3;i++){
  for (j=0; j<i;j++){
    console.log('nos before swapping: ',arrayNos[i][j],arrayNos[j][i]);
    temp=arrayNos[i][j] ;
    console.log('temp ',temp);
    arrayNos[i][j]=arrayNos[j][i];
    arrayNos[j][i]=temp;
    console.log('nos after swapping: ',arrayNos[i][j],arrayNos[j][i])

  }
}
reverseArray(arrayNos);
console.log('arrayNos',arrayNos);
makeGrid(arrayNos);
};

const transpose = arr =>{ 
  for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < i; j++) {
        const tmp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = tmp;
     };
  }
  makeGrid(arr);
}
const reverseArray=function(arrayNumb){
  console.log('arrayNumb before reverse',arrayNumb)
  let length = arrayNumb.length;
  for (let k=0; k<arrayNumb.length ; k++){
   
    let i= 0; let j= length-1;
    while(i<j)
    {
      console.log('k',k)
      console.log('arrayNumb[k][j]- before',arrayNumb[k][j])
      temp= arrayNumb[k][j];
      arrayNumb[k][j]=arrayNumb[k][i];
      arrayNumb[k][i]=temp;
      console.log('arrayNumb[k][j]- after',arrayNumb[k][j])
      i++;j--;
    }
  }
  console.log('arrayNumb after reverse', arrayNumb);
}

