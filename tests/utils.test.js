const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("Should return the area of a rectangle", function() {
  const area = utils.rectangleArea(2, 3)
  expect(area).to.be.a("number")
  expect(area).to.equal(6)
})


it("Should return the perimeter of a rectangle", function() {
  const perimeter = utils.rectanglePerimeter(2, 3)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(10)
})

it("should return the area of a circle with radius", function() {
  const area = utils.circleArea(2)
  expect(area).to.be.a("number")
  expect(area.toFixed(2)).to.equal("12.57")
})

it("negative radii return null", function() {
  const area = utils.circleArea(-2)
  expect(area).to.be.a("null")
  expect(area).to.equal(null)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const item1 = utils.createItem("apple", 0.99)
  utils.addItemToCart(item1)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.an("array")
  expect(cart).to.deep.include({name: "apple", price: 0.99, quantity: 1})
})

it("Should add a new item to the shopping cart", function() {
  const item1 = utils.createItem("banana", 0.99)
  utils.addItemToCart(item1)
  const cart = utils.getShoppingCart()
  expect(cart).to.deep.include({name: "banana", price: 0.99, quantity: 1})
  expect(cart).to.have.lengthOf(1);
})

// expect(utils.removeItemFromCart).to.decrease(utils.getNumItemsInCart).by(1);

it("Should return the number of items in the cart", function() {
  const item1 = utils.createItem("banana", 0.99)
  utils.addItemToCart(item1)
  const item2 = utils.createItem("apple", 0.99)
  utils.addItemToCart(item2)
  const items = utils.getNumItemsInCart()
  expect(items).to.equal(2);
})


it("Should remove items from cart", function() {
  const item1 = utils.createItem("banana", 0.99)
  utils.addItemToCart(item1)
  const item2 = utils.createItem("apple", 0.99)
  utils.addItemToCart(item2)
  utils.removeItemFromCart(item1)
  const cart = utils.getShoppingCart()
  expect(cart).to.not.contain(item1);
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  const item1 = utils.createItem("banana", 0.99)
  utils.addItemToCart(item1)
  const item2 = utils.createItem("apple", 0.99)
  utils.addItemToCart(item2)
  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.be.equal(2);
})

it("Should validate that an empty cart has 0 items", function() {
  const item1 = utils.createItem("banana", 0.99)
  utils.addItemToCart(item1)
  utils.clearCart()
  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.be.equal(0);
})

it("Should return the total cost of all items in the cart", function() {
  const item1 = utils.createItem("banana", 1)
  utils.addItemToCart(item1)
  const item2 = utils.createItem("apple", 1.05)
  utils.addItemToCart(item2)
  const cartTotal = utils.getCartTotal()
  console.log(cartTotal)
  expect(cartTotal).to.be.equal("2.05");
})