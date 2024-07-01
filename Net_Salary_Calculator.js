const readline = require('readline')


function netSalaryCalculator() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    function userInput(prompt) {
        return new Promise((resolve, reject) => {
            rl.question(prompt, (answer) => {
                resolve(answer); 
        })
    

    let grossSalary = basicSalary + benefits; // calculates gross salary

    let tax = grossSalary * TAX_RATE;
    let nhifDeduction = grossSalary * NHIF_RATE;
    let nssfDeduction = grossSalary * NSSF_RATE;
    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction; // calculates netSalary

    function nhifFunction(netSalary){
        if(taxableIncome<=5999){
           return 150;
        }
        else if(taxableIncome>=6000 && taxableIncome<=7999){
            return 300;
        }
        else if(taxableIncome>=8000 && taxableIncome<=11999){
            return 400;
        }
        else if(taxableIncome>=12000 && taxableIncome<=14999){
            return 500;
        }
        else if(taxableIncome>=15000 && taxableIncome<=19999){
            return 600;
        }
        else if(taxableIncome>=20000 && taxableIncome<=24999){
            return 750;
        }
        else if(taxableIncome>=25000 && taxableIncome<=29999){
            return 850;
        }
        else if(taxableIncome>=30000 && taxableIncome<=34999){
            return 900;
        }
        else if(taxableIncome>=35000 && taxableIncome<=39999){
            return 950;
        }
        else if(taxableIncome>=40000 && taxableIncome<=44999){
            return 1000;
        }
        else if(taxableIncome>=45000 && taxableIncome<=49999){
            return 1100;
        }
        else if(taxableIncome>=50000 && taxableIncome<=59999){
            return 1200;
        }
        else if(taxableIncome>=60000 && taxableIncome<=69999){
            return 1300;
        }
        else if(taxableIncome>=70000 && taxableIncome<=79999){
            return 1400;
        }
        else if(taxableIncome>=80000 && taxableIncome<=89999){
            return 1500;
        }
        else if(taxableIncome>=90000 && taxableIncome<=99999){
            return 1600;
        }
        else if(taxableIncome>=100000){
            return 1700;
        }
        
    
    }
    