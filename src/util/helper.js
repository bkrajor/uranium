const printDate= ()=>{
    console.log(new Date().toLocaleDateString())
} 

const printMonth= ()=>{
    const months= ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    let currentMonth= new Date().getMonth()    
    currentMonth=months[currentMonth]
    console.log(currentMonth)

}

const getBatchInfo=()=>{
    console.log("Uranium, W3D1, the topic for today is Nodejs module system")
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo