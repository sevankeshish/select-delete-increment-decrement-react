import "./product-style.scss";

export const Product = (props) => {
  console.log(props);
  return (
    <div className="product-style">
      {/* <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      <button onClick={props.onDelete}>Delete</button> */}
      <p>product name : {props.items.title}</p>
      <p>product price : {props.items.price}</p>
      <span className="value">{props.items.quantity}</span>
      <input
        className="input"
        type="text"
        onChange={props.onChange}
        value={props.items.title}
      />
      <button onClick={props.onDecrement} className="decrement">
        -
      </button>
      <button onClick={props.onIncrement} className="increment">
        +
      </button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
