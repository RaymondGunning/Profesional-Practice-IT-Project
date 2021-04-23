import React, { useState } from "react";
import StripeContainer from './StripeContainer';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0); //price * qty for items price
    const shippingPrice = itemsPrice * 0.14;
    const totalPrice = itemsPrice + shippingPrice; //total price

    const [showItem, setShowItem] = useState(false);
    const { countCartItems } = props; //for number badge on cart

    return (

        <aside>
            <div>
                Cart{' '}
                {props.countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ) : (
                    ''
                )}
                {' '}
            </div>

            <div>
                {cartItems.length === 0}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">
                            +</button>
                        <button onClick={() => onRemove(item)} className="add">
                            -</button>
                    </div>
                    <div className="col-2">
                        {item.qty} x £{item.price.toFixed(2)}</div>
                </div>

            ))}
            {/*  conditional rendering */}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">€{itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">€{shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Total Price</div>
                        <div className="col-1 text-right">€{totalPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        {showItem ? <StripeContainer /> : <>
                            <button onClick={() => setShowItem(true)}>Finalize Checkout</button></>}
                    </div>
                </>
            )}

        </aside>
    ); //cartItems.map to list all items
}