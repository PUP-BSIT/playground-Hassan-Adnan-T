var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Balance cannot go to below 0");
        }
    };
    BankAccount.prototype.checkbalance = function () {
        console.log("Current Balance : ".concat(this.balance));
    };
    return BankAccount;
}());
var Account1 = new BankAccount("123123", 50000);
Account1.deposit(1000);
Account1.checkbalance();
Account1.withdraw(10000);
Account1.checkbalance();
