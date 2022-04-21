import "./styles.css";

import ItemCart from "./components/ItemCart";
import ShoppingCart from "./components/ShoppingCart";
import data from "./data";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: []
    };
  }

  addToCart = (product) => {
    const { cartItems } = this.state;
    const isPresent = cartItems.find((item) => item.id === product.id);
    if (isPresent) {
      this.setState({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...isPresent, count: isPresent.count + 1 }
            : item
        )
      });
    } else {
      this.setState({
        cartItems: [...cartItems, { ...product, count: 1 }]
      });
    }
  };

  removeItem = (product) => {
    const { cartItems } = this.state;
    const isPresent = cartItems.find((item) => item.id === product.id);
    if (isPresent) {
      this.setState({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...isPresent, count: isPresent.count - 1 }
            : item
        )
      });
    } else {
      this.setState({
        cartItems: [...cartItems, { ...product, count: 1 }]
      });
    }
  };

  reset = () => {
    this.setState({
      cartItems: []
    });
  };

  render() {
    return (
      <div>
        <ItemCart items={data.items} addToCart={this.addToCart} />
        <ShoppingCart
          cartItems={this.state.cartItems}
          removeItem={this.removeItem}
        />

        <div>
          <h2>Order</h2>
          <button onClick={this.buy}>Buy</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
