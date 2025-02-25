const User = require("../lab2");

describe("add to cart", () => {
  let user;
  beforeEach(() => {
    user = new User("ahmed", "ahmed");
  });
  it("should add product to cart", () => {
    const product = { name: "test", price: 10 };
    user.addToCart(product);
    expect(user.cart).toContain(product);
    expect(typeof product.name).toBe("string");
    expect(typeof product.price).toBe("number");
    expect(typeof product).toBe("object");
  });
  it("return total cart price", () => {
    const product1 = { name: "test1", price: 10 };
    const product2 = { name: "test2", price: 20 };
    user.addToCart(product1);
    user.addToCart(product2);
    expect(user.calculateTotalCartPrice()).toBe(30);
    expect(typeof user.calculateTotalCartPrice()).toBe("number");
  });
});
