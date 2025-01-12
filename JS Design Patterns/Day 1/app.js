class CEO {
  constructor(name, age, address) {
    if (CEO.instance) {
      return CEO.instance;
    }
    this.name = name;
    this.age = age;
    this.address = address;
    CEO.instance = this;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  }
}

const ceo1 = new CEO("Ahmed", 27, "asd");
console.log(ceo1.displayInfo());

const ceo2 = new CEO("Mohamed", 25, "dsdf");
console.log(ceo2.displayInfo());
// ___________________________________________________________________

class Vehicle {
  vehic() {}
}

class Car extends Vehicle {
  vehic() {
    console.log("I am a Car.");
  }
}

class Truck extends Vehicle {
  vehic() {
    console.log("I am a Truck.");
  }
}

class Motorcycle extends Vehicle {
  vehic() {
    console.log("I am a Motorcycle.");
  }
}

class Bus extends Vehicle {
  vehic() {
    console.log("I am a Bus.");
  }
}

class VehicleFactory {
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }

  createVehicle() {
    switch (this.vehicleType) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      case "motorcycle":
        return new Motorcycle();
      case "bus":
        return new Bus();
      default:
        console.log("Unknown vehicle type!");
    }
  }
}

const factory1 = new VehicleFactory("car");
const myCar = factory1.createVehicle();
myCar.vehic();

const factory2 = new VehicleFactory("motorcycle");
const myMotorcycle = factory2.createVehicle();
myMotorcycle.vehic();
// _______________________________________________________________

class Toy {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
}

class ToyDuck extends Toy {
  constructor(color, price) {
    super(color, price);
  }
}

class ToyCar extends Toy {
  constructor(color, price, name) {
    super(color, price);
    this.name = name;
  }
}

const ToyCar1 = new ToyCar("red", 500, "toyta");
const ToyDuct1 = new ToyCar("red", 500);
// _______________________________________________________________
class ConfigureVals {
  constructor(xpoint = 0, ypoint = 0, shape = null) {
    if (ConfigureVals.instance) {
      return ConfigureVals.instance;
    }

    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.shape = shape;

    ConfigureVals.instance = this;
  }

  displayConfig() {
    return `xpoint: ${this.xpoint}, ypoint: ${this.ypoint}, shape: ${this.shape}`;
  }
}

const config1 = new ConfigureVals(10, 20, "Circle");
console.log(config1.displayConfig());

const config2 = new ConfigureVals(30, 40, "Square");
console.log(config2.displayConfig());
