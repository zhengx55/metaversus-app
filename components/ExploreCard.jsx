'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';
import Image from 'next/image';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    onClick={() => handleClick(id)}
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'
    } flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-75 ease-out-flex `}>
    <Image
      src={imgUrl}
      alt={title}
      fill
      sizes='100%'
      className='absolute rounded-[24px] object-cover'
    />
    {active !== id ? (
      <h3 className='absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-24 lg:origin-[0,0] lg:rotate-[-90deg]'>
        {title}
      </h3>
    ) : (
      <div className='rounded-b-[24px ] absolute bottom-0 w-full flex-col justify-start bg-[rgba(0,0,0,0.5)] p-8'>
        <div
          className={`${styles.flexCenter} glassmorphism mb-[16px] h-[60px] w-[60px] rounded-[24px]`}>
          <img
            src='/headset.svg'
            alt='headset'
            className='h-1/2 w-1/2 object-contain'
          />
        </div>
        <p className='text-[15px] font-normal uppercase leading-[20px] text-white'>
          Enter the Metaverse
        </p>
        <h2 className='mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
