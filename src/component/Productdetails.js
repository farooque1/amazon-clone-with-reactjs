import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"


export default function Productdetails() {

    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    
    const {product} = useSelector(state => state.Productreducer);
    useEffect(() => {
       dispatch({type: 'PRODUCT', id})
    }, [id])
    
    const decQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (

        <div className="container mt-100">
        <div className="row">
            <div className="col-6 my-5">
            <div className="details__image">
                <img src={`/image/${product.image}`} alt=""/>
            </div>
            </div>
            <div className="col-6 text-center my-5 ">
            <div className="mb-3">
                <h1>{product.name}</h1>
            </div>
            <div className="details__prices">
            <h4>Price {product.price}$</h4>
            </div>
            <div className="details__p mt-4">
                {product.desc}
            </div>
            <button className="btn btn-warning my-5" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>add to cart</button>
            </div>
        </div>
    </div>
  )
}
