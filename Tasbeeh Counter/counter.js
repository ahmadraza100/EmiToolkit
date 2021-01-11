
var count = 0;
    document.getElementById("count").addEventListener("click",function(){

        
       
        document.getElementById("resulcount").style.fontSize = "3rem";
             count = count+1;
             document.getElementById("resulcount").innerHTML = `<h1> ${count} </h1>`;

             localStorage.setItem("resulcount", count.toString());
  
    });


    document.getElementById("reset").addEventListener("click",function(){

        count= 0 ;
        document.getElementById("resulcount").innerHTML = `<h1> ${count} </h1>`;

    });
   