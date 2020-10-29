import fetchDrink from "./fetchDrink.js"
window.addEventListener("DOMContentLoaded",()=>{

   const id = localStorage.getItem("ids");
   const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
   console.log(id)
fetchDrink(url).then((data)=>{


   
const resultArr = data.drinks;
const resultObj = data.drinks[0];
 console.log(resultArr);
const{idDrink,strCategory,strIngredient1,strIngredient2,strIngredient3,strDrinkThumb}= resultObj;
console.log(idDrink,strCategory,strIngredient1,strIngredient2,strIngredient3,strDrinkThumb)


const run = resultArr.map((item)=>{
return ` <div class="col-7 mx-auto">
                    <div class="img-cont">
                        <img src=${strDrinkThumb} alt="" class="img-fluid">
                    </div>

                    <div class="info-cont py-5">
<div>
    <h5>${idDrink}</h5> </div>
<div>
    <h5>${strCategory}</h5>
</div>
<div>
    <h5>${strIngredient1},${strIngredient2},${strIngredient3}</h5>
</div>
</div>
                    </div>`;


}).join("")
const rowss = document.querySelector(".rows");
rowss.innerHTML = run;

})
   
})




