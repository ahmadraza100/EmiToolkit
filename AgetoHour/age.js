function a(){
    document.querySelector("#btnn").style.visibility = "hidden";
    
    var age = document.getElementById("ageyear").value;
   var ageInt = parseInt(age);
     
    let final = ageInt*365*24;
    final = final.toString();
;    document.getElementById("form").style.visibility = "hidden";
    document.getElementById("re").style.visibility = "hidden";
    document.getElementById("rqst").style.visibility = "hidden";
    document.getElementById("resultt").style.display = "block";
    document.querySelector("#resultt").innerHTML =`<h1 >You age in Hour is <br /> \"<b>${final}</b>"</h1>`;
    
}

