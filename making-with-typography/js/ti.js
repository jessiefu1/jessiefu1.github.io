
function randomColor(){
    var str = "rgb(" + parseInt(Math.random()*255) + "," + parseInt(Math.random()*255) + "," + parseInt(Math.random()*255) + ",1)";
    return str;
};
var oDiv1 = document.querySelectorAll(".ti-one h2");
var oDiv2 = document.querySelector(".ti-two h1");
var oDiv3 = document.querySelector(".three-top h1");
var oDiv4 = document.querySelectorAll(".three-top li");
var speed = 5;//每一次变化的大小
var count = 0;//计数
setInterval(function(){
     for(let i =0;i<oDiv1.length;i++){
        oDiv1[i].style.color = randomColor()
     }
    oDiv2.style.color = randomColor()
    oDiv3.style.color = randomColor()
    for(let i =0;i<oDiv4.length;i++){
        oDiv4[i].style.color = randomColor()
     }
    
    // let dax = Math.floor(Math.random()*300)+12
    // oDiv.style.fontSize = dax+'px'
},1000)
