//fetch drinks on domcontentloaded
import fetchDrink from "./fetchDrink.js"
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d";

const getElement = (selection)=>{
const element = document.querySelector(selection)
if(element){
return element;
}

else {

  throw new Error("no element selected")
}


}

/* const fetchDrink = async (link)=>{
  //showloading
  try {
    
const response = await fetch(link);
const data = await response.json();

 return data
  } catch (error) {
    console.log(error)
  }


} */

const displayDrink = (url)=>{
fetchDrink(url).then((data)=>{

console.log(data)

if(data){
const drinks = data.drinks.map((drink)=>{

return `
  <div class="col-10 col-md-3 py-4 mx-auto mx-md-0  img-cont" data-id=${drink.idDrink}>
    <img src=${drink.strDrinkThumb} alt=${drink.strDrink} class="img-fluid">
    <div class="drink-div bg-warning px-2">
<a href = "product.html" class="drink-name font-weight-bold text-uppercase item">${drink.strDrink}</a>
    </div>
   
  </div>`;

}).join("");
 

let row = getElement(".display")

row.innerHTML = drinks;
                     
const items = document.querySelectorAll(".item");
const itemss = [...items];

itemss.forEach((item)=>{

item.addEventListener("click",(e)=>{

console.log(e.target.parentElement.parentElement.dataset.id);
const id = e.target.parentElement.parentElement.dataset.id;


localStorage.setItem("ids",id);
})

});






}

else if (!data) {
  let row = getElement(".display")
  let msg = getElement(".msg")
  row.innerHTML = ""
  msg.classList.remove("d-none");
  return;
}
})



//hideloading
//add condition here...the err message  !result
/* 
if(result){

const drinks = result.map((drink)=>{

return `
<div class="col-10 col-md-3 py-4 mx-auto mx-md-0" data-id=${drink.idDrink}>
  <div class="img-cont">
    <img src=${drink.strDrinkThumb} alt=${drink.strDrink} class="img-fluid">
    <div class="drink-div bg-warning px-2">
<h5 class="drink-name font-weight-bold text-uppercase">${drink.strDrink}</h5>
    </div>
   
  </div>
</div>`;

}).join("");
 */
//hide loading
/* 
let row = getElement(".display")

row.innerHTML = drinks;

}

else if(!result){
  let row = getElement(".display")
  let msg = getElement(".msg")
  row.innerHTML = ""
  msg.classList.remov e("d-none");
  return
}

*/
}

window.addEventListener("DOMContentLoaded",()=>{

  //fetch data

// fetchDrink(url)
displayDrink(URL)
})


//get the form input btn

let input = getElement(".search-input");
input.addEventListener("keyup",()=>{

  // console.log(input.value);
const val = input.value;
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${val}`;
if(!val) return;
else{

  let msg = getElement(".msg")
  msg.classList.add("d-none");
displayDrink(url)
}


})