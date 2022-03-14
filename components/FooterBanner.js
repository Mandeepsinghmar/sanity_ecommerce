import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProductImage from '../images/footer-banner.webp';

const FooterBanner = () => (
  <div className='footer-banner-container'>
    <div className='banner-desc'>
      <div className='left'>
        <p>20% OFF</p>
        <h3>FINE</h3>
        <h3>SMILE</h3>
        <p>15 Nov to 7 dec</p>
      </div>
      <div className='right'>
        <p>Beats Solo Air</p>
        <h3>Summer Sale</h3>
        <p className='company-desc'>
          company that's grown from 270 to 480 employees in the last 12 months.
        </p>
        <Link href='/product/boat-rockerz-451'>
          <button>Shop Now</button>
        </Link>
      </div>

      <div className='footer-banner-image'>
        <Image src={ProductImage} className='footer-banner-image' />
      </div>
    </div>
  </div>
);

export default FooterBanner;
