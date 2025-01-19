class User {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  getDetails(): string {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
  updateEmail(newEmail: string): string {
    this.email = newEmail;
    return `Email updated successfully to ${newEmail}`;
  }
}

const userOne = new User("ahmed", "ahmed@gmail.com");
console.log(userOne.getDetails());
console.log(userOne.updateEmail("elsaka@gmail.com"));

export {};
