import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


export default function Cart() {


    const { products, totalQuantities, totalPrice } = useSelector(state => state.Cartreducer);
    const dispatch = useDispatch();

    return (

        <div className="cart">
            <div className="container">
                <h3 className='mt-4'>Your cart</h3>
                {products.length > 0 ? <>
                    <div className="row ">
                        <div className="col-8">
                            <table class="table table-bordered text-center">
                                <thead class="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th scope="col">Images</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Discount Price</th>
                                        <th scope="col">Remove Item</th>
                                    </tr>
                                </thead>
                                {products.map(product => (
                                    <tbody key={product.id}>
                                        <tr>
                                            <td>{product.id}</td>
                                            <th><img src={`/image/${product.image}`} style={{ width: '150px' }} /></th>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.discountPrice * product.quantity}</td>
                                            <td><div className="cart__remove" onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                                                <button className='btn btn-warning'>Remove</button>
                                            </div></td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                        <div className="col-4 summary-col">
                            <div className="summary">


                            <table class="table table-bordered text-center">
                                <thead class="table-dark">
                                    <caption>Summery</caption>
                                        <tr> 
                                            <th scope="col">Total Item</th>
                                            <th scope="col">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{totalQuantities}</td>
                                            <td>{totalPrice}</td>
                                        </tr>
                                        <tr>
                                        <Link to="/Checkout"><button type="button" className="btn btn-warning my-3">Checkout</button></Link>
                                    
                                        </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </> : 'Your cart is empty!'}
            </div>
        </div>
    )
}
