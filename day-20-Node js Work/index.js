console.log('Working Start');
setTimeout(()=>{
    console.log('Time out')
},0)

//Promise
const promise = new Promise ((resolve,rejected)=>{
    const status = true;
    if (status) resolve ('API Executed')
    else rejected("There is some error")
})

promise.then((val)=>{
    console.log(val);
}).catch(err=>{
    console.log(err)
})

console.log('Working Ends Here !!!');