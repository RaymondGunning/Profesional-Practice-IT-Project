import React, { useState } from "react";
import StripeContainer from './StripeContainer';


export default function Product(props) {
  const { product, onAdd } = props;
  const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
      <div>
        {showItem ? <StripeContainer /> : <>
          <button onClick={() => setShowItem(true)}>PURCHASE ITEM</button></>}
      </div>
      <br></br>

    </div>
  );
}
