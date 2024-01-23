const users = ["Joey", "Phoebe", "Rachel"]
const user = [
    {name: "Joey",
     age: 29,
    },
    {name: "Joey",
     age: 19
    },
    {name: "Monica",
     age: 35}
]
/*
    push -> Array sonuna yeni eleman ekler.
    map
    find
    filter
    some -> Verilen koşullara uyuyorsa true, uymuyorsa false döner.
    every
    includes
*/

//PUSH
// users.push("Ross");
// users.push("Monica");

// console.log(users);

//MAP
// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }
// user.map((item) => {
//     // console.log(item);
//     console.log(item.name);
// })

//FIND
// const result = user.find((item) => item.name === "Joey" && item.age > 20);
// console.log(result);

//FILTER
// const filtered = user.filter(({name,age}) => name === "Joey" && age > 20);
// console.log(filtered);

//SOME
// const some = user.some((item) => item.age === 29);
// console.log(some);
// const some1 = user.some((item) => item.age === 15);
// console.log(some1);

//EVERY
// const every = user.every((item) => item.age > 5);
// console.log(every);

//INCLUDES
// const fruit = ['apple', 'pear', 'banana'];
// const isIncluded = fruit.includes('banana');
// console.log(isIncluded);
