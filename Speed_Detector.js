const speedLimit = 70;
const kmPerDemeritPoint = 5;
const pointsLimit = 12;

const readline = require('readline');

function speedDetector() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    read.question('Speed at: ', (speed) => {
        const parsedSpeed = parseFloat(speed);
        if (!isNaN(parsedSpeed)) {
            if (parsedSpeed < speedLimit) {
                console.log("Ok");
            } else {
                const demeritPoints = Math.floor((parsedSpeed - speedLimit) / kmPerDemeritPoint);
                if (demeritPoints > pointsLimit) {
                    console.log("License suspended");
                } 
            }
        } else {
            console.log("Invalid input. Please enter a valid number for speed.");
        }

        read.close();
    });
}

speedDetector();