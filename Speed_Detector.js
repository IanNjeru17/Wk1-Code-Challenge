const speedLimit = 70;
const kmPerDemeritPoint = 5;
const pointsLimit = 12;

const readline = require('readline');
    
function speedDetector (){  
    const getSpeed = () => {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        read.question('Speed at: ', (speed) => {  
            read.close();
            resolve(parseFloat(speed)); 
        });
    });
};
}
getSpeed()
.then((speed) => {
        if (speed < speedLimit) {
             console.log("Ok");
} 
    else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > pointsLimit) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    })
    .then((result) => {
        console.log(result); 
}
}

speedDetector()
