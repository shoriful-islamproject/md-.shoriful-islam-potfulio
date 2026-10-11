

const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

const options =document.querySelectorAll("select option");



// Validate inputs before conversion
for(let select of options){
    let nweopt =select;
  select.addEventListener("click", function(){
    const amount = document.getElementById("amount").value;
    if(amount === "" || amount <= 0){
      alert("Please enter a valid amount");
      document.getElementById("amount").focus();
    }
  });

}
