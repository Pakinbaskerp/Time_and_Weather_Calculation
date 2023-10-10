
 
const continent=document.querySelector('.conti');
const state=document.querySelector('.state');

const button = document.querySelector('.button');


async function timeDetector(continent,state){
    const location=continent+"/"+state;
    const apiKey="4VL7QKOUTW0G";
     const apiUrl=await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${location}`)

     const data=await apiUrl.json();
     console.log(data);
     document.querySelector('.ans').innerHTML=data.formatted;

}



button.addEventListener('click',()=>{
    timeDetector(continent.value,state.value);
}) 