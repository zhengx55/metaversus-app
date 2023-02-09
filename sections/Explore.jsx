'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants/';
const Explore = () => {
  const [active, setActive] = useState('world-1');
  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        whileInView='show'
        initial='hidden'
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title='| The World' textStyles='text-center' />
        <TitleText
          title={
            <>
              Choose the world you want <br className='hidden md:block' /> to
              explore
            </>
          }
          textStyles='text-center'
        />
        <div className='mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row'>
          {exploreWorlds.map((item, index) => (
            <ExploreCard
              key={item.id}
              {...item}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
