// - See hover states for all interactive elements on the page
//- Receive an error message when the `form` is submitted if:
// The `input` field is empty
//- The email address is not formatted correctly
const button = document.querySelector(".button");
const inputB = document.querySelector(".input");
const input1 = document.querySelector(".input");


button.addEventListener("click", function() {
var input = document.querySelector(".input").value;
    if (input.indexOf('.com') >= 0 && input.indexOf('@') >= 0) {
        console.log(input);
    } 
    else {
        inputB.style.backgroundColor = "hsl(0, 93%, 68%)";
        document.querySelector(".warning").style.display = '';
        
         }
    
})
input1.addEventListener("click", function() {
   
    inputB.style.backgroundColor = "";
    document.querySelector(".warning").style.display = 'none';
})
