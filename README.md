<div align=center><img src="https://raw.githubusercontent.com/apporoad/LiSA.orbit.js/master/docs/orbit.png"/></div>


# LiSA.orbit.js
task orbit  just like planetary orbit

## how to use
```bash
npm i --save lisa.orbit
```

```js
var orbit = require("lisa.orbit")

orbit.setOrbit("Mercury",p=>{ 
    console.log("Mercury : hello i am " + (p+ 10000)); 
    return new Promise((r,j)=>{ setTimeout(()=>{
        r(p)
    },Math.random()*3000)})
},mina=>{
    console.log("xx mina : " + mina)
},"mercury")

orbit.push("Mercury", "hell9")

```
more in test.js