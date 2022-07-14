var cart = [
  { title: "samsung", price: 100, amount: 1 },
  { title: "my", price: 100, amount: 1 },
  { title: "book", price: 100, amount: 1 },
  { title: "yes", price: 100, amount: 1 },
  { title: "aladin", price: 100, amount: 1 },
  { title: "money", price: 100, amount: 1 },
  { title: "house", price: 100, amount: 1 },
  { title: "rich", price: 200, amount: 2 },
];

// starting point ==> total
// return an object with two properties
// cartItem ==> call against every item in the array

cart.reduce((total, item) => {
  total = { ...total, [item.title]: item };
  return total;
}, {});

// {samsung: {…}, my: {…}, book: {…}, yes: {…}, aladin: {…}, …}

cart.reduce(
  (total, cartItem) => {
    total.totalItems += cartItem.amount;
    total.cartItem += cartItem.price;

    return total;
  },
  {
    totalItems: 0,
    cartItem: 0,
  }
);
// {totalItems: 9, cartItem: 900}

cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;

    total.totalItems += amount;
    total.cartItem += amount * price;

    return total;
  },
  {
    totalItems: 0,
    cartItem: 0,
  }
);
// {totalItems: 9, cartItem: 1100}

const { totalItems, cartItem } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;

    total.totalItems += amount;
    total.cartItem += amount * price;

    return total;
  },
  {
    totalItems: 0,
    cartItem: 0,
  }
);
