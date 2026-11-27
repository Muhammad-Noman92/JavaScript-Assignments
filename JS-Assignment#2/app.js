//  – Push, Pop, Shift, Unshift (6–10)
// Q1.
// var fruits = ["Apple", "Mango", "Orange"];
// Is array ke end mein "Banana" aur "Grapes" add karo.

// var fruits = ["Apple", "Mango", "Orange"];
// fruits.push("Grapes");
// console.log(fruits);

// Q2.Array ki last 2 values remove karo.
// var students = ["Ali", "Ahmed", "Sara", "Aman"];

// var students = ["Ali", "Ahmed", "Sara", "Aman"];
// students.pop();
// console.log(students);

// Q3.First city remove karo aur console mein updated array print karo.
// var cities = ["Karachi", "Lahore", "Multan"];

// var cities = ["Karachi", "Lahore", "Multan"];
// cities.shift();
// console.log(cities);

// Q4.Array ke start mein "Ali" aur "Aman" add karo.
// var names = ["Ahmed", "Sara", "Bilal"];

// var names = ["Ahmed", "Sara", "Bilal"];
// names.unshift("Ali","Aman");
// console.log(names);

// Q5.•  Start se 1 value remove karo.
// •  End se 1 value remove karo.
// •  Start mein "Japan" add karo.
// •  End mein "Canada" add karo.
// var countries = ["Pakistan", "India", "China", "Turkey"];

// var countries = ["Pakistan", "India", "China", "Turkey"];
// countries.shift();
// countries.pop();
// countries.unshift("Japan");
// countries.push("Canada");
// console.log(countries);

// Q6.Slice use karke sirf first 3 cities ka new array banao.

// var cities = ["Karachi", "Lahore", "Multan", "Islamabad", "Quetta", "Peshawar"];
// var copyCities = cities.slice(0,3);
// console.log(copyCities);

// Q7 Slice use karke last 2 fruits ka new array banao.

// var fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
// var copyFruits = fruits.slice(-2);
// console.log(copyFruits);

// Q8.Splice use karke index 1 se 1 value remove karo.

// var students = ["Ali", "Ahmed", "Sara", "Bilal"];
// students.splice(1,1);
// console.log(students);

// Q9.Splice use karke index 2 par "Islamabad" add karo, bina kisi value ko remove kiye.

// var cities = ["Karachi", "Lahore", "Multan", "Quetta"];
// cities.splice(2,0,"Islamabad");
// console.log(cities);

// Q10.Splice use karke index 1 se 2 values remove karo aur unki jagah "Watermelon" add karo.

// var fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
// fruits.splice(1,2,"Watermelon");
// console.log(fruits);

// Q11. – Grand Challenge
// Is array par ye tamam tasks perform karo:
// •  End mein "Peshawar" add karo.
// •  Start mein "Quetta" add karo.
// •  Last value remove karo.
// •  First value remove karo.
// •  Index 2 se 1 value remove karo.
// •  Index 1 par "Sukkur" add karo.
// •  Slice use karke first 3 values ka new array banao.
// •  Original aur new array dono print karo.

// var cities = ["Karachi","Lahore","Multan","Islamabad","Hyderabad"];
// cities.push("Peshawar");
// console.log(cities);

// cities.unshift("Quetta");
// console.log(cities);

// cities.pop();
// console.log(cities);

// cities.shift();
// console.log(cities);

// cities.splice(2,1);
// console.log(cities);

// cities.splice(1,0,"Sukkur");
// console.log(cities);

// var copyCities = cities.slice(0,3);
// console.log(copyCities);
