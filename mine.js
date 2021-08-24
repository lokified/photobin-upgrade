function hide(){
    let x=document.getElementById("puts2");
    if(x.type === "password"){
        x.type="text";

    }
    else{
        x.type="password";
    }
}