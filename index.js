
function f1(){
    let facebook =document.getElementById("fb").value;
    let instagram =document.getElementById("insta").value;
    let youtube =document.getElementById("youtube").value;
    let time =document.getElementById("year").value;

    ytom(time);

    function ytom(t){
        let time =2021 -t ;
        let days = time*365;
        alert(days)
    }
    
}