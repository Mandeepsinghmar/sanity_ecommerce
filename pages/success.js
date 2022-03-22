import React, { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

const success = () => {
    useEffect(() => {
        localStorage.setItem('cartItems', []);
        localStorage.setItem('totalPrice', 0);
        localStorage.setItem('totalQuantities', 0);
    }, []);
    return (
        <div className='success'>
            <p className='icon'><BsBagCheckFill /></p>
            <h2>thank you for your purchase</h2>
            <p className='description'>
                If you have any questions, please email
                <a className='email' href="mailto:orders@example.com">orders@example.com</a>
            </p>
            <Link href='/'>
                <button className='btn'>Continue Shopping</button>
            </Link>
        </div>
    )
}

export default success