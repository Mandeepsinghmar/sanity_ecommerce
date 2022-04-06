/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import Link from 'next/link';

import { useStateContext } from '../context/StateContext';

const cancel = () => {
    const { setShowCart } = useStateContext();

    useEffect(() => {
        setShowCart(true);
    }, []);

    return (
        <div className="cancel-wrapper">
            <div className="cancel">
                <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
                <Link href="/">
                    <button type="button" className="btn">Continue Shopping</button>
                </Link>
            </div>

        </div>
    );
};

export default cancel;
