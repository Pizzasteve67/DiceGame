var p1 = Math.random()*6;
p1 = Math.floor(p1)+1;

var p2 = Math.random()*6;
p2 = Math.floor(p2)+1;


console.log(document.querySelector('.img1').setAttribute("src", "images/dice"+p1+".png"));
console.log(document.querySelector('.img2').setAttribute("src", "images/dice"+p2+".png"));

if(p1>p2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if(p1<p2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else if (p1===p2){
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩"
}