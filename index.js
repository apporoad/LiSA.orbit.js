const LiSAPromise = require('lisa.promise')
const utils = require('lisa.utils')


// map = {
//     "orbit" : {
//         handler = function(){},
//         windowedResultHandler = function(){},
//         defaultParam = "",
//         promise : [Object]
//     }
// }
var map = {}

var test = ()=>{

}

exports.setOrbit = (orbit, handler, windowedResultHandler,defaultParam,internal) =>{
    //todo catch
    orbit = orbit || "default" 

    if(map[orbit].promise){
        map[orbit].promise.stopAuto()
    }
    else{
        map[orbit].promise = LiSAPromise(1)
    }
    map[orbit] = map[orbit] || {}
    map[orbit].handler = handler || map[orbit].handler
    map[orbit].windowedResultHandler = windowedResultHandler ||  map[orbit].windowedResultHandler
    map[orbit].defaultParam =  defaultParam || map[orbit].defaultParam

    map[orbit].promise.autoAction(map[orbit].defaultParam,{
        then : map[orbit] = windowedResultHandler,
        catch : err=>{ console.error(`LiSA.orbit: ${orbit} throwserror : ${err}` )},
        internal : internal || 100
    })
}

exports.push = (orbit,paramArray, yourHandler) =>{
    orbit = orbit || "default"
    var orbitMeta = map[orbit]
    if(!orbitMeta){
        exports.setOrbit(orbit)
    }
    orbitMeta.promise.assignBatch(
        yourHandler || orbitMeta.handler,
        utils.Type.isArray(paramArray) ? paramArray :[paramArray]
    )
}

exports.pushDefault= (paramArray,yourHandler) =>{
    exports.push(null,paramArray,yourHandler)
}

exports.stop = orbit=>{
    //todo
}

exports.start = orbit=>{
    //todo
}

exports.stopAll = orbit=>{
    //todo
}

exports.startAll = orbit=>{
    //todo
}

exports.test = test