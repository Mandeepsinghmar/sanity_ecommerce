import React from 'react';
import { client } from '../client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products }) => {
  return (
    <div>
      <HeroBanner />
      <div className='products-heading'>

        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <p className='marquee-container'>
        <marquee scrollamount='10' >
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
          <span className='text-red'>NO. 1 Wireless Hearable Brand In World</span>
        </marquee>
      </p>
      <FooterBanner />

    </div >
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};

export default Home;
