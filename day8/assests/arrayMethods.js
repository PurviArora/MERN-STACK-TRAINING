//Array Methods

//Array Declaration
let arr=["Noida","Nainital","Kashmir","Nepal"]
console.log(arr);

//Push : to add the element at the last
arr.push("Tamil Nadu")
console.log(arr);

//Unshift : to add the element at the first position
arr.unshift("Pune");
console.log(arr);

//Splice : to add the element at any postion in the array
//splice(index value, delete count, elements)
arr.splice(2,0,"Ladakh","Ajmer")
console.log(arr);

//Pop : to remove the element at the last positon
arr.pop()
console.log(arr);

//Shift : to remove the element at the first positon
arr.shift()
console.log(arr);

//Array Declaration
let names=["Karan","Purvi","Pari","Vikhyat","Kartik"]
console.log(names);

//Slice : extract a specific part of an existing array through index positions and creates a new array
let snames = names.slice(2,5)
console.log(snames);

//Join : to combine elements using any symbol, digit, or anything
let joinArray = names.join("@")
console.log(joinArray);

//Length : to calculate the length of an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

//Length property can also be used to set the length of an array 
fruits = ["Banana", "Orange", "Apple", "Mango"];
size = fruits.length = 2;
console.log(size);

//toString() returns the elements of an array
fruits = ["Banana ", " Orange ", " Apple ", " Mango "];
let list = fruits.toString();
console.log(list);

//at() returns the element of the given index position
fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Kiwi"];
let fruit = fruits[4];
console.log(fruit);

//isArray() returns true/false when the condition is checked
fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Kiwi"];
check = Array.isArray(fruits);
console.log(check);

//delete using this property leads undefined output like after removing the element "empty" word is appeared that's why we use pop & shift
fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Kiwi"];
delete fruits[0];
document.write("The first fruit is: " + fruits[0]);
console.log(fruits);

//concat creates a new array by merging (concatenating) existing arrays
// concat : 2 arrays
arr1 = ["Apple", "Mango"];
arr2 = ["Ginger", "Tomato", "Beans"];
array1 = arr1.concat(arr2);
console.log(array1);
// concat : 3 arrays
arr1 = ["Apple", "Mango"];
arr2 = ["Ginger", "Tomato", "Beans"];
arr3 = ["Green", "Black", "Red", "Yellow"]
array2 = arr1.concat(arr2,arr3);
console.log(array2);

