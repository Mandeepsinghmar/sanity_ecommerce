import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { useStateContext } from '../context/stateContext';
import { Cart } from '.';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href={'/'}>PHANOX</Link>
      </p>
      <p className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </p>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
