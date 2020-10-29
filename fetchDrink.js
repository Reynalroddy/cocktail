
const fetchDrink = async (link)=>{
  //showloading
  try {
    
const response = await fetch(link);
const data = await response.json();

 return data
  } catch (error) {
    console.log(error)
  }


}

export default fetchDrink;