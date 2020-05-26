class User {
  constructor(username, password) {
    this.name = username;
    this.password = password;
    this.type = "Trial User";
  }
  greet() {
    console.log("Welcome Back," + this.name);
  }
  status() {
    console.log("Current status: " + this.type);
  }
}

var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();
