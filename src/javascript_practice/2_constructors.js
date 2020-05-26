class User {
  constructor(first, last, e) {
    this.f = first;
    this.l = last;
    this.email = e;
  }
}

var userOne = new User("Paul", "O'Conner", "poconner@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne.email);
console.log(userOne);

class Player {
  constructor(name, number, AP) {
    this.n = name;
    this.u = number;
    this.a = AP;
  }
}

var playerOne = new Player("Mitchum", "3176057387", "89.8");
console.log(playerOne.name);
console.log(playerOne.n);
console.log(playerOne.u);
console.log(playerOne.a);
console.log(playerOne);
