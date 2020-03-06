var exp=''
var a
var b


function dis(ele)
{
exp=exp+ele
document.getElementById("dis1").value=exp	

if(exp.includes('+'))
{   l=exp.length
	pos=exp.indexOf('+')
	a=parseInt(exp.slice(0,pos))
	b=parseInt(exp.slice(pos+1,l))
	
}
else if(exp.includes('-'))
{   l=exp.length
	pos=exp.indexOf('-')
	a=parseInt(exp.slice(0,pos))
	b=parseInt(exp.slice(pos+1,l))
	
}
else{
	exp.includes('*')
    l=exp.length
	pos=exp.indexOf('*')
	a=parseInt(exp.slice(0,pos))
	b=parseInt(exp.slice(pos+1,l))
	
	
}


}
function solve()
{
	if(exp.includes("+")){
	document.getElementById("dis1").value=a+b
	}
	else if(exp.includes("-"))
	{
		document.getElementById("dis1").value=a-b
	}
	else
	{
		document.getElementById("dis1").value=a*b
	}

}
function clrt()
{
	exp=''
	document.getElementById("dis1").value=exp
}

	
	


