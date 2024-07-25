// ...................arithmetic operators//
// addition
let a = 3;
console.log(a + 4);
// subtract
let b = 4;
console.log(a - 2);

// subtract
let d = 5;
console.log(a * 3);

// divide
let e = 15;
console.log(a / 6);

// reminder
let f = 15;
console.log(a % 6);

// Exponential
let h = 12;
console.log(f ** 2);

// assign
let g = 40;
console.log(g = 10);


//Add then assign
let k = 10;
console.log(h += 3);

// Subtract then assign
let i = 25;
console.log(i -= 13);

// Multiply then assign
let j = 35;
console.log(j *= 20);

// .//or
const m = undefined;
const l = 9;
console.log(k || l);

// && and
let x = 0;
let y = 1;
console.log(x < y);

// if else

let isR = true;
let isS = true;

if (isR && isS) {
    console.log("Perfect weather for outdoor activities!");
} else {
    console.log("Maybe another day.");
}

// Equality
console.log(1 == 3);
console.log(1 === "1");
// && opreators

let r = false;
let p = true;
console.log(r && s);

// or opreators

let rs = false;
let uv = true;
console.log(rs || uv);


// Conversion
let v = false;
let sv = false;
console.log(v + sv);

let vs = true;
let vj = false;
console.log(vs + vj);

// Convert to number then negate it
let q = false;
let c = true;
console.log(c - p);


// Coercion

// truthy falsy
const value2 = false;
const value9 = true;
let value = value2 + value9;
console.log(value);

// 
const value3 = 80;
const value4 = "10";
let plus = value3 + value2;
console.log(plus);


// relatiomal/comparison
let first = '12';
let second = '15';
console.log(first < second); 
console.log(first > second); 

// Greater than or equal to
console.log(3 >= 2);  
console.log(4 <= 2);

// Less Than Or Equal To Operator
console.log(2 <= 5);
console.log(4 <= 4);  
console.log(3 <= 2);  

// Not Equal To Operator
console.log(2 != 2);  
console.log(2 != "2");  
console.log(2 != 3);  
 
//Postfx increment 
let ab = 1;
console.log(ab++);    
console.log(ab);      
// Postfx decrement
let cd = 1;
console.log(cd--);    
console.log(cd);     

// Prefx increment
let sr = 1;
console.log(++sr);    
console.log(sr);      
// Decrement
let ss = 1;
console.log(--ss);    
console.log(ss);      

// setTimeout
 setTimeout(() => {
    console.log("time")
 }, 3000);
 console.log("abc");
 