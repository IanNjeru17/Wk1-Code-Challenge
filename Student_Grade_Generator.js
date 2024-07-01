
function gradeGenerator (){  

    const readline = require('readline');
    const getGrade = () => {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        read.question('Student marks: ', (grade) => {  
            read.close();
            resolve(parseFloat(grade)); 
        });
    });
};

getGrade()  
    .then((grade) => {
        if  (grade > 79) {
            return 'Grade: A';
        } else if (grade >= 60 && grade <= 79) {
            return 'Grade: B';
        } else if (grade >= 49 && grade <= 59) {
            return 'Grade: C-';
        } else if (grade >= 40 && grade <= 49) {
            return 'Grade: D-';
        } else {
            return 'Grade: E';
        }
    })
    .then((result) => {
        console.log(result); 
    })
   

}
    
gradeGenerator()