const trim=()=>{
    let str="         Bharat Kumar Rajor            "
    console.log(str.trim())
}

const changeToLowerCase=()=>{
    str="Bharat Kumar Rajor"
    console.log(str.toLowerCase())
}

const changeToUpperCase=()=>{
    str="Bharat Kumar Rajor"
    console.log(str.toUpperCase())
}

module.exports.trim=trim
module.exports.changeToLowerCase=changeToLowerCase
module.exports.changeToUpperCase=changeToUpperCase
