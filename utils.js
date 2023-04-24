// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const rectangleArea = (w, h) => {
  if ((w < 0) | (h < 0)) {
    return null 
  } else {
  return w*h
  }
}

const rectanglePerimeter = (w, h) => {
  // should return the perimeter
  if ((w < 0) | (h < 0)) {
    return null 
  } else {
  return ((w+h)*2)
  }
}

const circleArea = r => {
  if (r < 0) {
    return null 
  } else {
    return (Math.PI * Math.pow(r, 2));
   }

}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  const itemIndex = shoppingCart.findIndex(cartItem => cartItem.name === item.name);

  if (itemIndex !== -1) {
    shoppingCart[itemIndex].quantity += item.quantity;
  } else {
    shoppingCart.push(item);
  }
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  
  let totalQuantity = 0;
  
  shoppingCart.forEach(function(item) {
    totalQuantity += item.quantity;
  });
  
  return totalQuantity;
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  let itemName = '';

  if (typeof item === 'string') {
    itemName = item;
  } else if (typeof item === 'object' && item.hasOwnProperty('name')) {
    itemName = item.name;
  } else {
    throw new Error('Invalid item to remove from cart');
  }

   const existingItemIndex = shoppingCart.findIndex(cartItem => cartItem.name === itemName);

   if (existingItemIndex !== -1) {
     const existingItem = shoppingCart[existingItemIndex];
     
     if (existingItem.quantity > 1) {
       existingItem.quantity--;
     } else {
       shoppingCart.splice(existingItemIndex, 1);
     }
   }
 
}

const getCartTotal = () => {
  let cartTotal = 0
  shoppingCart.forEach(function(item) {
    cartTotal += (item.price * item.quantity);
  });
  return cartTotal.toFixed(2);
}

// const item1 = createItem("banana", 1)
// addItemToCart(item1)
// const item2 = createItem("apple", 1.05)
// addItemToCart(item2)
// const cartTotal = getCartTotal()
// console.log(cartTotal)

module.exports = {
  sayHello, rectangleArea, rectanglePerimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, getCartTotal
}

