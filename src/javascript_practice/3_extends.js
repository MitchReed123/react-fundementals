//ES6 JS Classes
class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }
  //Method 1
  greet() {
    console.log("Welcome Back," + this.name);
  }
  status() {
    console.log("Current Status: " + this.type);
  }
}

class trialUser extends User {
  trialEnding() {
    console.log(
      "your trial will be ending soon, " +
        this.name +
        "," +
        "Would you like to join our program?"
    );
  }
}
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

var trialUser = new trialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();
