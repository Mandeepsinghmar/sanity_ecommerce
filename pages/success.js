/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const success = () => {
    const { query } = useRouter();
    const [order, setOrder] = useState();
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();

        const customerDetails = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout_sessions/${query.session_id}`,
                { method: 'GET' },
            );

            if (response.statusCode === 500) return;

            const data = await response.json();

            setOrder(data);
        };

        customerDetails();
    }, [query]);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>thank you {order?.name} for your purchase</h2>
                <p className="email-msg">Check your email inbox for the receipt.</p>
                <p className="description">
                    If you have any questions, please email
                    <a className="email" href="mailto:orders@example.com">
                        orders@example.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default success;
