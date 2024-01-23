// setTimeout(() => {
// console.log("Merhaba");
// }, 2000) //2sn

// setTimeout(() => {
//     console.log("Merhabaa");
//     }, 5000) //5sn
// //girilen ms kadar sonra içeriye yazılan fonksiyon konsola yazdırılır.

// // setInterval(() => {
// //     console.log("Running continuously!");
// // }, 1000);
// //setInterval sürekli çalışır.

// const sayHello = (cb) => {
//     cb();
// };

// sayHello(() => {
//     console.log("Helloooo");
// });

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users are uploaded.", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post) => console.log("Post 1 is uploaded.", post))

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data) => data.json())
//         .then((data) => console.log("Post 2 is uploaded.", data))
// });
//---------------------------------------------------------------------
//ASYNC-AWAIT
// async function getData(){
//     const users = await(
//         await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();    

//     console.log("users", users);   
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();
//----------------------------------------------
//anonim fonksiyon

// (async() => {
//     const users = await(
//         await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();    

//     console.log("users", users);   
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

// (async() => {
//     const {data: users} = await axios ("https://jsonplaceholder.typicode.com/users");

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");    

//     console.log("users", users);   
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();
//------------------------------------------------
//PROMISE
// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if(number == 1){
//             resolve({text: "Hi!"});
//         }

//         reject("Error!");
//     });
// };

// getComments(3)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(users);
    });
};

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

        resolve(post);
    });
};

// (async() => {
// await getUsers()
// .then((users) => console.log(users))
// .catch((error) => console.log(`Error! ${error}`));

// await getPost(1)
// .then((post) => console.log(post))
// .catch((error) => console.log(`Error! ${error}`));
// } )();

// (async() => {
//     const users = await getUsers()
    
//     const post = await getPost(1)

//     console.log(users);
//     console.log(post);
    
//     } )();

// (async() => {
//     try{
//         const users = await getUsers();
//         const post = await getPost(1);
// }catch(error){
//     console.log(error);
// }})();

Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);