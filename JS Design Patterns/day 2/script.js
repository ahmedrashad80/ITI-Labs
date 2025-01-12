// 1-Consider that we have A store that sell products and  every day the store put new products into
// the store and the store want to let every people that interested with store that new product is in the store now.

class Store {
  constructor() {
    this.products = [];
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(product) {
    this.observers.forEach((observer) => observer.update(product));
  }

  addProduct(product) {
    this.products.push(product);
    console.log(`New product added: ${product}`);
    this.notify(product);
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }

  update(product) {
    console.log(`${this.name} notified: New product available - ${product}`);
  }
}

const store = new Store();

const customer1 = new Customer("ahmed");
const customer2 = new Customer("ali");

store.subscribe(customer1);
store.subscribe(customer2);

store.addProduct("Laptop");

store.addProduct("phone");

store.unsubscribe(customer2);

store.addProduct("Headphones");

// 2-Suppose that we play playstation football game and during the game we want to change the game plan
//     (attack -defence - meduim)

class Strategy {
  execute() {
    throw new Error("No plan to execute");
  }
}

class Attack extends Strategy {
  execute() {
    console.log(`attack Strategy`);
  }
}

class Defence extends Strategy {
  execute() {
    console.log(`defence Strategy`);
  }
}

class Medium extends Strategy {
  execute() {
    console.log(`medium Strategy`);
  }
}

class playstation {
  constructor(plan) {
    this.plan = plan;
  }

  setPlan(newPlan) {
    this.plan = newPlan;
  }

  getPlan() {
    this.plan.execute();
  }
}

const attack = new Attack();
const defence = new Defence();
const medium = new Medium();
const strategy = new playstation(attack);
strategy.getPlan();

strategy.setPlan(defence);

strategy.getPlan();
