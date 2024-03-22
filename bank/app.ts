class BankAccount {
    accountNumber : string;
    balance : number;

    constructor(accountNumber : string , balance : number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number):void{
        this.balance += amount;
    } 

    withdraw(amount: number):void{
        if (amount <= this.balance){
            this.balance -= amount;
        }
        else{
            console.log("Balance cannot go to below 0")
        }
    }

    checkbalance():void{
        console.log(`Current Balance : ${this.balance}`)
    }

}

const Account1 = new BankAccount("123123", 50_000);

Account1.deposit(1000);
Account1.checkbalance();
Account1.withdraw(10_000);
Account1.checkbalance();