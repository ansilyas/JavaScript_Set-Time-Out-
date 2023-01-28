// first.className="text-black red"
// first.classList.append("red")
// first.classList.add("red")
// first.classList.remove("red")
// first.classList.toggle("red")
//first.classList.contains("red") //this tell element is their or not.

// -----------------------------------------------

//Set TimeOut;
document.write("Hello")

const sum = (a, b, c) => {
    console.log("yes I am Running " + (a + b + c));
}
setTimeout(sum, 1000, 1, 2, 5)

//Set Interval ;
// setInterval(sum,10,1,2) 
setInterval(function () {
    alert("Set Interval")
}, 3000);


/*
 let a=setTimeout(function(){
    alert("I am inside of set timeout")
 },2000)
let b=prompt("Do you want to run the settimeout?")
if("n"==b){
    clearTimeout(a)
}
//  clearTimeout(a)    //IT (clear) the time set to it;
 console.log(a)
 */