import React, { useEffect } from 'react';
import Link from 'next/link';

import { urlFor } from '../client';

const Product = ({ product }) => {
  const { image, name, slug, price } = product;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image[0])}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
