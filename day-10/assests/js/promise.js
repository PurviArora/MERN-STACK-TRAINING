let promise = new Promise((resolve,rejected)=>{
    let status = true ;
    if (status) { 
                    resolve("Work Completed"); 
            }
    else { 
            rejected("Not Completed"); 
        }
})
console.log(promise)

promise.then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})
