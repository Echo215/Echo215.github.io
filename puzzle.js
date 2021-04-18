
function check(){
  x=document.getElementById("Answer").value;
  if(x==="派大星"){
    text="恭喜你，答对了";
  }
  else{
    text="再想想…我是一个生活在海底的粉色小可爱"
  }
document.getElementById("result").innerHTML=text;
document.getElementById("result").style.visibility="visible";
}
