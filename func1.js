
var func={
fn:"sai",
ln:"cha",
printfu:function()
{
console.log(this.fn,this.ln)
}
}
var anotherfunc={
fn:"sf",
ln:"sfds",
}
func.printfu.call(anotherfunc)
