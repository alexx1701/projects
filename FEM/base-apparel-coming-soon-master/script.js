// - See hover states for all interactive elements on the page
//- Receive an error message when the `form` is submitted if:
// The `input` field is empty
//- The email address is not formatted correctly
const button = document.querySelector(".button");
var input = document.querySelector(".input").value;
const inputB = document.querySelector(".input");


button.addEventListener("click", function() {
    if (input.indexOf('.com') >= 0 && input.indexOf('@') >= 0) {
        console.log(input);
        input = '';
    } else {
        inputB.style.backgroundColor = "hsl(0, 93%, 68%)";
        document.querySelector(".warning").style.display = '';
        input = '';
    }
})

