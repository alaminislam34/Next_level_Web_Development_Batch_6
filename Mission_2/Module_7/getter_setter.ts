class BankAccount2 {
  name: string;
  protected balance: number;
  readonly userId: string;
  constructor(name: string, balance: number, userId: string) {
    this.name = name;
    this.balance = balance;
    this.userId = userId;
  }

  //   set balance
  //   addBalance(balance: number) {
  //     this.balance = this.balance + balance;
  //   }
  set addBalance(balance: number) {
    this.balance = this.balance + balance;
  }
  // get balance
  get getBalance() {
    return this.balance;
  }
}

const bankDetails = new BankAccount2("alamin", 50, "alamin34");

bankDetails.addBalance = 100;
console.log(bankDetails.getBalance);
