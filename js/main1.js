
numberOfDiv=document.getElementsByTagName("div").length;


function Rotate(childNumber)
{
	console.log(childNumber)
	document.getElementsByTagName("div")[childNumber].style.transition= "all 0.5s ease";
	document.getElementsByTagName("div")[childNumber].style.transform= "rotate(180deg)";
	childNumber++;
	setTimeout(function(){
		if(childNumber!=numberOfDiv){
			Rotate(childNumber);
		}
	}, 50)
	
}



Rotate(0)
