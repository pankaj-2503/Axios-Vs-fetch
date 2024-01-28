//axios vs fetch
const axios =require("axios");

// -----------------------------------------fetch-------------------------------
//fetch syntax with async await
// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response=>{
//       const json=await response.json();
//       console.log(json);
//     })
//   }

// async function main(){
//     const response= await fetch("https://sum-server.100xdevs.com/todos");
//     const json = await response.json();
//     console.log(json);
// }

// async function main(){
//     const response=await fetch(
//         "https://www.toptal.com/developers/postbin/1706433565523-5380908902734",{
//             method:"POST",
//                body:{
//                 username:"pankaj",
//                 password:"123dsse",
//                },
//                headers:{
//                 Authorization:"Bearer 123"
//                }
// //         }
//     )
//     const data=await response.text();
//     console.log(data);
// }


// ----------------------------------------------Axios------------------------------------------------------------
// Axios 
// async function main(){
//     const response=await axios.get("https://sum-server.100xdevs.com/todos");
//     const data=response.data;
//     console.log(data.todos);
// }
async function main(){
    const response=await axios.post("https://www.toptal.com/developers/postbin/1706433565523-5380908902734",{
        method:"POST",
        body:{
            username:"Pankaj",
            password:"123dsse",
        },
        headers:{
            Authorization:"Bearer 123"
        }
    });
    const data=response.data;
    console.log(data);
}

main();