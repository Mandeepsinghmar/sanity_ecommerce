import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProductImage from '../images/hero-banner.webp';

const HeroBanner = () => (
  <div className='hero-banner-container'>
    <div>
      <p className='beats-solo'>Beats solo</p>
      <h3>Wireless</h3>

      <h1>Headphone</h1>
      <div className='hero-banner-image'>
        <Image src={ProductImage} className='hero-banner-image' />
      </div>
      <div>
        <Link href='/product/boat-rockerz-451'>
          <button>Shop wireless headphone</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>
            Set your mind ablaze with boAt Rockerz 450 — our slick headphones
            that offer immersive sound quality and add luxury to your sound.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBanner;
