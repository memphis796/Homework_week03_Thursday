
var a, m;

   function add(a, b){
     return (a + b);
   }
 console.log(add (9, 7));
   document.getElementById("calculateBtn").style.color = "blue";
document.addEventListener("DOMContentLoaded", function(event) {
 Number(document.getElementById("num_two").value)
 document.getElementById("answer").style.color = "green"


 document.getElementById("calculateBtn").addEventListener("click", function(){
    a = Number(document.getElementById("num_one").value);
    m = Number(document.getElementById("num_two").value);
       document.getElementById("answer").innerHTML = add(a, m);

  });
});
