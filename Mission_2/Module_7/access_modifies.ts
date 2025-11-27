class BankAccount {
  name: string;
  protected balance: number;
  readonly userId: string;
  constructor(name: string, balance: number, userId: string) {
    this.name = name;
    this.balance = balance;
    this.userId = userId;
  }
  addBalance(balance: number) {
    this.balance = this.balance + balance;
  }
}
const account = new BankAccount("alamin", 20, "alamin4");
// account.addBalance(1000);
class BankAccount1 extends BankAccount {
  addBalance(balance: number) {
    this.balance = this.balance + balance;
  }
}
const account2 = new BankAccount1("rafi", 30, "rafi3");
account2.addBalance(323242);
console.log(account2);
