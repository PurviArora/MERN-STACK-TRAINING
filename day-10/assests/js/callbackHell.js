// A & C are executed first then B because even if 0 milli secs are there but there is some time before execution
console.log("A");           
    setTimeout(() => {
        console.log("B");
        },0)
console.log("C"); 

setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => {
            console.log("C"); 
        },1000)
    },2000)
},4000)
