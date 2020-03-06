var x = document.createElement("DIV");
x.style.width='200px'
x.style.height='200px'
x.style.backgroundColor='pink'
x.innerHTML="saicharan"
x.id="sai"
x.onmouseover=myFunction
x.onmouseout=myFunction1
document.body.appendChild(x);




var x1 = document.createElement("DIV");
x1.style.width='200px'
x1.style.height='200px'
x1.style.backgroundColor='pink'
x1.innerHTML="akula"
x1.id="sai1"
x1.onmouseover=myFunction
x1.onmouseout=myFunction1
document.body.appendChild(x1);

function myFunction(){
	document.getElementById("sai").style.background="red"
	document.getElementById("sai1").style.background="red"
}
function myFunction1(){
	document.getElementById("sai").style.background="blue"
	document.getElementById("sai1").style.background="blue"
}
function change1(){
	var m = document.getElementById("sai");
	var n = document.getElementById("sai1");
  if (m.innerHTML === "saicharan") {
    m.innerHTML = "akula";
  } else {
    m.innerHTML = "saicharan";
  }
  if (n.innerHTML === "akula") {
    n.innerHTML = "saicharan";
  } else {
    n.innerHTML = "akula";
  }
}