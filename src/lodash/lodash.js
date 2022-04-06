const lodash=require('lodash')

const chunkFunction=()=>{
    const months= ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
console.log(lodash.chunk(months,3))
}

const tailFunction=()=>{
    const arr=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arr))
}

const unionFuntion=()=>{
    let ar1=[1,2,3]
    let ar2=[1,2,3,4]
    let ar3=[1,2,3,4,5]
    let ar4=[1,2,3,4,5,6]
    let ar5=[1,2,3,4,5,6,7]
    console.log(lodash.union(ar1,ar2,ar3,ar4,ar5))
}

const pairsFunction=()=>{
    const pairs=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log(lodash.fromPairs(pairs))
}

module.exports.chunkFunction=chunkFunction
module.exports.tailFunction=tailFunction
module.exports.unionFuntion=unionFuntion
module.exports.pairsFunction=pairsFunction