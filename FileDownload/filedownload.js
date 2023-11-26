document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('btn1').addEventListener('click', createBlob);
});

const createBlob= ()=>{
    const str= 'Hi goodmorning'
    let b = new Blob([str],{type:'plain/text'});
    console.log('blob ',b);
    let url = URL.createObjectURL(b);
    // creating anchor tag
    let a= document.createElement('a');
    a.href=url;
    a.download='greetings.txt';
    
    // this download property starts browser to local disk download, 
    // as well as setting default name

    a.textContent='download greetings';
    document.querySelector('main').append(a); 

   // in case we want it to be downloaded on click
    // a.href=URL.createObjectURL(b);
    // a.download='greeting.txt',
    // a.click();




}