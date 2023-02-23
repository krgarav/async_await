console.log("Person 1 : Shows ticket");
console.log("Person 2 : Shows ticket");

const premovie = async()=>{
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("ticket"),3000)
});
const getPopcorn =new Promise((resolve,reject)=> resolve("popcorn"));
const getButter =new Promise((resolve,reject)=> resolve("butter"));
const getColddrink =new Promise((resolve,reject)=> resolve("Cold Drink"));
let ticket = await promiseWifeBringingTicks;

console.log(`wife : I have the ${ticket}`);
console.log("husband : We should go in");
console.log("wife : no i am hungry");

let popcorn= await getPopcorn

console.log(`husband : I got some ${popcorn}`);
console.log("husband : We should go in");
console.log("wife : I need butter on my popcorn");

let butter = await getButter;

console.log(`husband : I got ${butter}`);
console.log("husband : Anything else ?");
console.log("wife : yes get cold drink , i m feeling thirsty");

let colddrink = await getColddrink;

console.log(`husband : I got ${colddrink}`);
console.log("husband : We should go in");
console.log("wife : lets go we are getting late");

return ticket
}

premovie().then((t)=>{console.log(`Person 3 : shows ${t}`)})
console.log("Person 4 : Shows ticket");
console.log("Person 5 : Shows ticket");