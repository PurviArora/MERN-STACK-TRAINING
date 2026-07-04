//Array Declaration
let names = ["Ram","Shyam","Mann","Gyan"];

//index values of the array elements 
for(let name in names)
{
    console.log(name)
}

//values of the array 
for(let name of names)
{
    console.log(name)
}
//Array declaration for counting the characters of the string
let sname = "Purvi";

// length of a string
let count = 0;

for(let n in sname)
{
    console.log(sname[n]);
    count++
}
console.log(sname," : ",count);

// Object declaration
let product = {
    id:1,
    pname:"Tea",
    price:10,
    qty:50
};
console.log(product);

//object key are shown
for(let p in product)
{
    console.log(p);
    
}
