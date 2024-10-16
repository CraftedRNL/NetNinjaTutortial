const d = new Date();
let hour = d.getHours();
let time = 19;
if(time <= 12){
    console.log("Its day time.");
} else if (time => 13 && time <= 17){
    console.log("Its afternoon.");
} else {
    console.log("Its night time.");
}
console.log(hour);
