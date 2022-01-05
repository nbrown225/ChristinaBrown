let btn1 = document.querySelector('.eventInn');
console.log(btn1);
let hGraph = document.querySelector('.eventExmp');
console.log();
btn1.addEventListener('click', ()=>{
    if(hGraph.style.display === 'none'){
        hGraph.style.display = 'block';
    } else{
        hGraph.style.display = 'none';
    }
})