import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"


export default function Product() {

    const {products} = useSelector(state => state.Productreducer);

    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();

    const dispatch = useDispatch();

    return (
        <div className='container-fluid text-center mt-5 mb-5'>
            <p className='fs-3 mb-5 font-weight-bold'>Top Deals</p>
            <div class="card-deck">
                <div className='row'>
                {products.map(product => ( 
                    <div className='col-3' key={product.id}>
                        <div class="card">
                        <NavLink to={`/details/${product.id}`}><img src={`/image/${product.image}`} class="card-img-top mt-5" style={{width:'100px;'}} alt="..." /></NavLink>
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.desc.substring(0,60)}</p>
                                <button className="btn btn-warning" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>add to cart</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
