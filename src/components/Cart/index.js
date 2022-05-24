import React from 'react';
import './index.css';
import CartItem from '../CartItem';
import {Link, Redirect} from 'react-router-dom';

const Cart = (props) => {
    if(props.shoppingCart.length === 0)
    {
        return (
            <Redirect to={"/"}/>
        )
    }
    let count = 0;
    let totalBeforeDiscount = 0;
    let discount = 0;
    let typeDiscount = 0;
    props.shoppingCart.forEach((item) => {
        count += item.quantity
        totalBeforeDiscount += item.price*item.quantity;
        discount += (item.price*item.quantity*(item.discount))/100;
        typeDiscount += (item.price*item.quantity*(item.typeDiscount))/100;
    });
    return (
        <div className="cart">
            <div className="cartRow">
                <div className="cartRowflex">
                    <div className="cartLeft">
                        <div className="cartHeader">
                            <Link to="/" className="backButton">{"<"}</Link>
                            <span className="cartHeading">Resumen del pedido</span>
                        </div>
                        <div className="cartSummary">
                            <span className="first">Productos ({count})</span>
                            <span className="second">Cantidad</span>
                            <span className="third">Precio</span>
                        </div>
                        <div className="cardTable">
                            {
                                props.shoppingCart.map(item => <CartItem incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} changeItem={props.changeItem} {...item}/>)
                            }
                        </div>
                    </div>
                    <div className="cartRight">
                        <div className="cartRightTop">
                            <div className="summaryHeader">Detalle de Compra</div>
                            <div className="price total">
                                <span>Productos ({count}) : ${totalBeforeDiscount}</span>
                            </div>
                            <div className="price">
                                <span>Descuento : ${discount}</span>
                            </div>
                        </div>
                        <div className="price orderTotal">
                            <span className="centerVertically">
                                Total
                            </span>
                            <span className="centerVertically">
                                ${totalBeforeDiscount-discount-typeDiscount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;