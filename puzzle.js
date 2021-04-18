
function check(){
  x=document.getElementById("Answer").value;
  if(x==="派大星"){
    text="恭喜你，答对了";
  }
  else{
    text="再想想……"
  }
document.getElementById("result").innerHTML=text;
document.getElementById("result").style.visibility="visible";
}
