
function f1(){
    let f =document.getElementById("fb").value;
    let facebook = parseInt(f);
    let i =document.getElementById("insta").value;
    let instagram = parseInt(i);
    let y =document.getElementById("youtube").value;
    let youtube = parseInt(y);
    let s =document.getElementById("Snapchat").value;
    let snapchat = parseInt(s)

    let t =document.getElementById("year").value;
    let time = parseInt(t)
    let total = (facebook+youtube+instagram+snapchat);
    let totaltodays = total*365;


    ytom(time,totaltodays);

    function ytom(t,totall){
        let yearTime =2021 -t ;
        let totalT = totall*yearTime;
        
        
        
    }
    
    let a =  document.getElementsByClassName("resultt").style.display= "hidden";
 
    
}
