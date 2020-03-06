function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}


function password1(inputText)
{
var passformat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
if(inputText.value.match(passformat))
{
document.form1.text2.focus();
return true;
}
else
{
alert("You have entered an invalid password!");
document.form1.text2.focus();
return false;
}
}