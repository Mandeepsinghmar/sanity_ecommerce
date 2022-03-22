import React from 'react'
import Link from 'next/link'

const cancel = () => {
    return (
        <div className='cancel'>
            <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
            <Link href='/'>
                <button className='btn'>Continue Shopping</button>
            </Link>
        </div>
    )
}

export default cancel