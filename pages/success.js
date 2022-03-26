import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from "next/router";

import { useStateContext } from '../context/stateContext';
import { runFireworks } from '../lib/utils';

const success = () => {
    const { query } = useRouter();
    const [order, setOrder] = useState()
    const { setCartItems, setTotalPrice, setTotalQuantities, cartItems } = useStateContext()

    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
        const customerDetails = async () => {
            const response = await fetch(`http://localhost:3000/api/checkout_sessions/${query.session_id}`, {
                method: "GET",
            })
            if (response.statusCode === 500) {
                console.error(response.message);
                return;
            }
            const data = await response.json()
            setOrder(data)
        }

        customerDetails()
    }, [query]);

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'><BsBagCheckFill /></p>
                <h2>thank you {order?.name} for your purchase</h2>
                <p className='email-msg'>Check your email inbox for the receipt.</p>
                <p className='description'>
                    If you have any questions, please email
                    <a className='email' href="mailto:orders@example.com">orders@example.com</a>
                </p>
                <Link href='/'>
                    <button width='300px' className='btn'>Continue Shopping</button>
                </Link>
            </div>
        </div>

    )
}

export default success;