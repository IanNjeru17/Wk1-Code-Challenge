const readline = require('readline')


function netSalaryCalculator() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        read.question('Student marks: ', (grade) => {  
            read.close();
            resolve(parseFloat(grade)); 
        })
    // rate constats
    const TAX_RATE = 0.25;   
    const NHIF_RATE = 0.025;  
    const NSSF_RATE = 0.06; 

    let grossSalary = basicSalary + benefits; // calculates gross salary

    let tax = grossSalary * TAX_RATE;
    let nhifDeduction = grossSalary * NHIF_RATE;
    let nssfDeduction = grossSalary * NSSF_RATE;
    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction; // calculates netSalary

    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}
}

netSalaryCalculator()