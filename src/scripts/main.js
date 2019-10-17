// this is declaring a variable for use by the function and targeting 
// that I have setup based on the given code

/* These are variables that I am declaring for the Id's and classes that I setup in Index.html
What this does is allow Javascript to interpret the HTML and Identify it as variables
Once this is done I can now manipulate Those Variables with Javascript
*/
let messageEl = document.getElementById("message");
let articleEl = document.getElementById("El");
let articleKabong = document.getElementById("Kabong");

/* The next lines of code creates an event listener targeted at the input element in HTML
that element is the "message" the variable name in jscript is messageEl. 
by adding .addeventListener and creating an anonymous function that listens for the 
Up action of a key stroke and linking it to innerHTML I give the value of the 
articles in HTML the same value as the input box with Jscript
*/

messageEl.addEventListener("keyup", function(event) {
   articleEl.innerHTML = event.target.value
   articleKabong.innerHTML = event.target.value 
})