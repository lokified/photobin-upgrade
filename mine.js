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

function show(){
    const message =document.getElementById("show-here");
    message.innerHTML=" ";
    let x=document.getElementById("show-number").value;
    try{
        if (isNaN(x)) throw "please enter a number";
        if (x =="") throw "empty! enter a number";
    }
    catch(err){
        message.innerHTML=err;
    }
}