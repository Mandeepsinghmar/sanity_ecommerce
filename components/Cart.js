import React, { useRef } from 'react';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti'

import { useStateContext } from '../context/stateContext';
import { urlFor } from '../client';
import ShoppingBag from '../images/shopping-bag.webp';

const Cart = () => {
  const cartOutsideRef = useRef();
  const { totalPrice, totalQuantities, cartItems, toggleCartItemQuantity, setShowCart, onRemove } = useStateContext();

  const closeCart = (cart_Outside_Ref) => {
    document.addEventListener('mousedown', (e) => {
      if (cart_Outside_Ref.current === e.target) {
        setShowCart(false);

      }
    });
  };

  closeCart(cartOutsideRef);
  console.log(cartItems)
  return (
    <div className='cart-wrapper' ref={cartOutsideRef}>
      <div className='cart-container'>
        <p className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </p>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <Image src={ShoppingBag} width={250} height={250} />

            <h3>Your Shopping Bag Is Empty.</h3>
            <button onClick={() => setShowCart(false)} className='btn'>Shop Items</button>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 &&
            cartItems?.map((item, index) => (
              <div className='product' key={index}>
                <img
                  src={urlFor(item?.image[0])}
                  className='cart-product-image'
                />
                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className='flex bottom'>
                    <div>
                      <p className='quantity-desc'>
                        <span
                          className='minus'
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'dec')
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className='num'>{item.quantity}</span>
                        <span
                          className='plus'
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'inc')
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>

                    </div>
                    <p className='remove-item' onClick={() => onRemove(item)}>
                      <TiDeleteOutline />
                    </p>
                  </div>

                </div>
              </div>
            ))}
        </div>
        {
          cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <button className='btn'>Checkout</button>

            </div>
          )
        }

      </div>
    </div>
  );
};

export default Cart;
