import React from "react";

export default class ShoppingCart extends React.Component {
  render() {
    const { cartItems, removeItem } = this.props;

    return (
      <div>
        <h3>Shopping Cart</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>
              {item.count} x Rs.{item.price}={item.count * item.price}
              <button onClick={() => removeItem(item)}> remove item</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
