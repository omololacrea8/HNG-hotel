var ham = document.getElementsByClassName("ham");
var drop = document.getElementsByClassName("drop");


ham[0].addEventListener ("click",myfunc)


var a = 0
function myfunc(){
drop[0]	.style.height ="232px"	
drop[0]	.style.width ="auto"
a++;

if (a%2 === 0)	{
drop[0]	.style.height ="0px"	
drop[0]	.style.width ="auto"		
		}	
	}