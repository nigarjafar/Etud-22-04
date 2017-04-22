function Animate(element,property,value,duration,callback){

	console.log(value)
	if(isNaN(Number(value))){
		var intendedValue=Number(value.match(/\d+/)[0]);
		var unit=value.match(/\D/g).join("")
	}
	else{
		intendedValue=Number(value);
		unit=""
	}
	
	var defaultValue=Number(window.getComputedStyle(element).getPropertyValue(property).match(/\d+/)[0])
	console.log("default"+defaultValue)
	console.log(intendedValue)

	var increase=(intendedValue-defaultValue)/duration;	
	var currentValue=defaultValue+increase; 
	console.log(increase)	

	var interval=setInterval(function(){
		console.log(currentValue)
		if(currentValue>intendedValue && intendedValue>defaultValue)
			currentValue=intendedValue;	
		if(currentValue<intendedValue && intendedValue<defaultValue)
			currentValue=intendedValue;

		element.style[property]=currentValue+unit;

		if(currentValue==intendedValue){
			clearInterval(interval)
			callback()
		}
		currentValue+=increase
	

	},1)


}
element=document.getElementsByTagName("div")[0]
Animate(element,"border-width","50px",500,function(){
	Animate(element,"margin","100px",500,function(){
		Animate(element,"width","90px",500,function(){
			Animate(element,"height","100px",500,function(){
				element.innerHTML="Call Back End"
			})
		})
	})
})

