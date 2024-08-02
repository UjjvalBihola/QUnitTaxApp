export default class IncomeTax {
    constructor(income, deductions) {
        this.income = income;
        this.deductions = deductions;
    }

    // Method to calculate federal tax based on the income
    calculateFederalTax() {
        // Check if the income is a valid number
        if (isNaN(this.income) || this.income < 0) {
            throw new Error("Invalid input: income must be a non-negative number");
        }

        let taxableIncome = this.income;
        let tax = 0;

        // Calculate federal tax based on the tax brackets
        if (taxableIncome <= 44701) {
            tax = taxableIncome * 0.15; // 15% for income up to $44,701
        } else if (taxableIncome <= 89401) {
            tax = ((taxableIncome - 44701) * 0.22) + 6705; // 22% for income between $44,701 and $89,401
        } else if (taxableIncome <= 138586) {
            tax = ((taxableIncome - 89401) * 0.26) + 16539; // 26% for income between $89,401 and $138,586
        } else {
            tax = ((taxableIncome - 138586) * 0.29) + 29327; // 29% for income above $138,586
        }

        // Round the tax to two decimal places
        return Math.round(tax * 100) / 100;
    }

    // Method to calculate Ontario provincial tax based on the income
    calculateOntarioTax() {
        // Check if the income is a valid number
        if (isNaN(this.income) || this.income < 0) {
            throw new Error("Invalid input: income must be a non-negative number");
        }

        let taxableIncome = this.income;
        let tax = 0;

        // Calculate Ontario tax based on the tax brackets
        if (taxableIncome <= 49231) {
            tax = taxableIncome * 0.0505; // 5.05% for income up to $49,231
        } else if (taxableIncome <= 98463) {
            tax = ((taxableIncome - 49231) * 0.0915) + 2486.17; // 9.15% for income between $49,231 and $98,463
        } else if (taxableIncome <= 150000) {
            tax = ((taxableIncome - 98463) * 0.1116) + 6990.89; // 11.16% for income between $98,463 and $150,000
        } else if (taxableIncome <= 220000) {
            tax = ((taxableIncome - 150000) * 0.1216) + 12742.42; // 12.16% for income between $150,000 and $220,000
        } else {
            tax = ((taxableIncome - 220000) * 0.1316) + 21254.42; // 13.16% for income above $220,000
        }

        // Round the tax to two decimal places
        return Math.round(tax * 100) / 100;
    }
}
