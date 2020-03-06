function calculator(){

 this.add=function(...input)
 {
 let sum=0
 for(let i of input)
 {
 sum=sum+i
 }
 console.log(sum)
 }
 this.dis=function()
 {
	 
 }
 
 }
a= new calculator();


a.add(1,2)
