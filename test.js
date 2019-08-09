// todo test exception


var orbit = require("./index")


orbit.setOrbit("Mercury",p=>{ console.log("Mercury : hello i am " + p); 
return new Promise((r,j)=>{ setTimeout(()=>{r(p)},Math.random()*3000)})},mina=>{
    console.log("mina : " + mina)
},"mercury")

orbit.setOrbit("Venus",p=>{ console.log("Venus : hello i am " + p); 
return new Promise((r,j)=>{ setTimeout(()=>{r(p)},Math.random()*3000)})},mina=>{
    console.log("mina : " + mina)
},"Venus")

orbit.setOrbit("Earth",p=>{ console.log("Earth : hello i am " + p); 
return new Promise((r,j)=>{ setTimeout(()=>{r(p)},Math.random()*3000)})},mina=>{
    console.log("mina : " + mina)
},"Earth")

orbit.setOrbit("Mars",p=>{ console.log("Mars : hello i am " + p);
return new Promise((r,j)=>{ setTimeout(()=>{r(p)},Math.random()*3000)})},mina=>{
    console.log("mina : " + mina)
},"Mars")

orbit.setOrbit("Jupiter",p=>{ console.log("Jupiter : hello i am " + p);
return new Promise((r,j)=>{ setTimeout(()=>{r(p)},Math.random()*3000)})},mina=>{
    console.log("mina : " + mina)
},"Jupiter")


orbit.pushDefault(["hello","hello","good","day"],p=>{console.log("default: " + p)})

var index=1;
setTimeout(() => {
    orbit.push("Mercury",index++)
    orbit.push("Venus",index++)
    orbit.push("Earth",index++)
    orbit.push("Mars",index++)
    orbit.push("Jupiter",index++,()=>{
    console.log("Jupiter : hi i am " + p);
    return new Promise((r,j)=>{ setTimeout(()=>{r(p)},Math.random()*3000)})}
    )
}, 300);
