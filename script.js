document.addEventListener('DOMContentLoaded',(event)=>{

    alert('Welcome to Tribute To The Soldier website');


    const yearspan= document.querySelector('.footer .year');
    const currentyear = new Date().getFullYear();

    yearspan.textContent=currentyear;
});