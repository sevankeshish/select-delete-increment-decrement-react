import { Component } from "react";
import { Product } from "../Product/Product-component";
import "./ProductList-style.scss";

class ProductList extends Component {
  ////////////////////////////////CONDITIONAL RENDERING//////////////////////////////
  // renderProduct = () => {
  //   if (this.state.products.length === 0)
  //     return <div>there is no product in the cart</div>;
  //   return this.state.products.map((product) => (
  //     <Product
  //       key={product.id}
  //       // name={product.title}
  //       // price={product.price}
  //       // quantity = {product.quantity}
  //       items={product}
  //       onDelete={() => this.removeHandler(product.id)}
  //       onIncrement={() => this.incrementHandler(product.id)}
  //       onChange={(e) => this.changeHandler(e, product.id)}
  //       onDecrement={() => this.decrementHandler(product.id)}
  //     />
  //   ));
  // };
  //

  render() {
    if (this.props.products.length === 0)
      return <div>there is no product in the cart</div>;
    return (
      <div class="ProductList-style">
        {/* {!this.state.products.length && <div>go to shoppings</div>} */}
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            // name={product.title}
            // price={product.price}
            // quantity = {product.quantity}
            items={product}
            onDelete={() => this.props.onDelete(product.id)}
            onIncrement={() => this.props.onIncrement(product.id)}
            onChange={(e) => this.props.onChange(e, product.id)}
            onDecrement={() => this.props.onDecrement(product.id)}
          />
        ))}
      </div>
    );
  }
}

// if (dataid.includes(id)) {
//     for (let i = 0; i <= dataid.length; i++) {
//       if (dataid[i] === id) {
//         dataid.splice(i, 1);
//         setdataid([...dataid]);
//       }
//     }
//   } else {
//     setdataid([...dataid, id]);
//   }
export default ProductList;
