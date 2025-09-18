import React, {useState} from "react";
import './App.css';

function App() {
  const initialItems = [
    { id: 1, name: "Apple" ,price:10},
    { id: 2, name: "Mango" ,price:15},
    { id: 3, name: "Banana", price:20},
  ]
  const [cart, setCart] = useState([]);
  const [items] = useState(initialItems);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  const removeFromCart = (item) => {
    const updatedCart=cart.filter((cartItem)=>  cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="items">
        <h2>Available Items</h2>
        <ul>
          {items.map((item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          )))}
        </ul>
      </div>
      <div className="cart">
        <ul>
        <h2>Shopping cart</h2>
        </ul>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  )
}

export default App;
        