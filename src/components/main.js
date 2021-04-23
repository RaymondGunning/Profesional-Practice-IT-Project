import React from 'react';
import Product from './product';


export default function Main(props) {
    const { products, onAdd } = props;


    return (
        <main >
            <br />
            <h1>Products</h1>
            <br />
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
}
