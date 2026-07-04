setInterval(()=>{
            let d = new Date();
            document.getElementById("time").innerText = d.toLocaleTimeString();
            console.log(d.toLocaleString())
        }, 1000)