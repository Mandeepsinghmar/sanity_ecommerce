import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast';

import { useStateContext } from '../context/stateContext';
import { urlFor } from '../lib/client';
import ShoppingBag from '../images/shopping-bag.webp';
import getStripe from '../lib/getStripe';

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

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems
      }),
    })
    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    const data = await response.json()
    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }
  closeCart(cartOutsideRef);

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
            <Link href='/'>
              <button onClick={() => setShowCart(false)} className='btn'>Shop Items</button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 &&
            cartItems?.map((item, index) => (
              <div className='product' key={index} >
                {
                  console.log(
                    item.image[0].asset._ref, urlFor(item?.image[0])
                  )
                }

                < img
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
              <div className='btn-container'>
                <button className='btn' onClick={handleCheckout}>pay with stripe</button>

              </div>
            </div>
          )
        }

      </div>
    </div >
  );
};

export default Cart;
