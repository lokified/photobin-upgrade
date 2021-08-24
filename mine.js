function hide(){
    let x=document.getElementById("puts");
    if(x.type === "password"){
        x.type="text";

    }
    else{
        x.type="password";
    }
    
    let y=document.getElementById("puts2");
    if(y.type === "password"){
        y.type="text";

    }
    else{
        y.type="password";
    }
}