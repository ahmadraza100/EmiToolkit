



// SM-CALCULATOR

function f1() {
    let f = document.getElementById("fb").value;
    let facebook = parseInt(f);
    let i = document.getElementById("insta").value;
    let instagram = parseInt(i);
    let y = document.getElementById("youtube").value;
    let youtube = parseInt(y);
    let s = document.getElementById("Snapchat").value;
    let snapchat = parseInt(s);

    let t = document.getElementById("year").value;
    let time = parseInt(t);
    let total = (facebook + youtube + instagram + snapchat);
    let totaltodays = total * 365;


    ytom(time, totaltodays);


}

function ytom(t, totall) {


    let yearTime = 2021 - t;
    let totalT = Math.floor((totall * yearTime) / 24);


    document.querySelector("#result").innerHTML = `<h1 syle="text-align:centre">You spent <br /> \"<b>${totalT}</b>"\ Days <br/>of your Life on Social Media</h1>`;

}

document.getElementById("btn").addEventListener("click", function () {
    f1();

    document.getElementById("btn").style.display = "none";
    document.querySelector("#r").style.display = "none";


    document.querySelector("#result").style.display = "block";
    document.querySelector("#result").style.fontSize = "2rem";

    document.querySelector("#form").style.visibility = "hidden";

    document.querySelector("#result").innerHTML.style.padding = "40px";


})




//   Age to Hours

var age = document.getElementById("ageyear").value;
var ageInt = parseInt(age);


function f2(my){
    var inHour = my * 365 * 24;
    return inHour;
}

document.querySelector("#btnn").addEventListener("click", function () {
  
    document.querySelector("#r").style.display = "none";
   
    
})