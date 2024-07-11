const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const PAYE_TAX_Limit= [
        { upperLimit: 24000, rate: 0.1 },
        { upperLimit: 40667, rate: 0.15 },
        { upperLimit: 57333, rate: 0.2 },
        { upperLimit: Infinity, rate: 0.25 }
    ];

    // NHIF Contribution rates
    const NHIF_CONTRIBUTIONS = [
        { upperLimit: 5999, amount: 150 },
        { upperLimit: 7999, amount: 300 },
        { upperLimit: 11999, amount: 400 },
        { upperLimit: 14999, amount: 500 },
        { upperLimit: 19999, amount: 600 },
        { upperLimit: 24999, amount: 750 },
        { upperLimit: 29999, amount: 850 },
        { upperLimit: 34999, amount: 900 },
        { upperLimit: 39999, amount: 950 },
        { upperLimit: 44999, amount: 1000 },
        { upperLimit: 49999, amount: 1100 },
        { upperLimit: 59999, amount: 1200 },
        { upperLimit: 69999, amount: 1300 },
        { upperLimit: 79999, amount: 1400 },
        { upperLimit: 89999, amount: 1500 },
        { upperLimit: 99999, amount: 1600 },
        { upperLimit: Infinity, amount: 1700 }
    ];

    // NSSF Contribution
    const NSSF_RATE = 0.06;
    const NSSF_MAX = 1080; // Maximum NSSF contribution

    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Pay As You Earn) Tax
    let paye = 0;
    let remainingSalary = grossSalary;

    for (let band of PAYE_TAX_Limit) {
        if (remainingSalary > band.upperLimit) {
            paye += band.upperLimit * band.rate;
            remainingSalary -= band.upperLimit;
        } else {
            paye += remainingSalary * band.rate;
            break;
        }
    }

    // Calculate NHIF Deductions
    let nhif = 0;
    for (let band of NHIF_CONTRIBUTIONS) {
        if (grossSalary <= band.upperLimit) {
            nhif = band.amount;
            break;
        }
    }

    // Calculate NSSF Deductions
    let nssf = Math.min(grossSalary * NSSF_RATE, NSSF_MAX);

    // Calculate Net Salary
    let netSalary = grossSalary - paye - nhif - nssf;

    // Return all calculated values
    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Prompt the user for input
rl.question('Enter your basic salary: ', (basicSalaryInput) => {
    const basicSalary = parseFloat(basicSalaryInput);

    rl.question('Enter your benefits: ', (benefitsInput) => {
        const benefits = parseFloat(benefitsInput);

        // Calculate the net salary and other details
        const result = calculateNetSalary(basicSalary, benefits);

        // Display the results
        console.log("Gross Salary:", result.grossSalary);
        console.log("PAYE:", result.paye);
        console.log("NHIF:", result.nhif);
        console.log("NSSF:", result.nssf);
        console.log("Net Salary:", result.netSalary);

        // Close the readline interface
        rl.close();
    });
});
