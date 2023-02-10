'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}>
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}>
        <img
          src='/get-started.png'
          alt='get-started'
          className='h-[90%] w-[90%] object-contain'
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex flex-[0.75] flex-col justify-center'>
        <TypingText title='| How Metaversus works' />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className='mt-[31px] flex max-w-[370px] flex-col gap-[24px]'>
          {startingFeatures.map((item, index) => {
            return <StartSteps key={item} number={index + 1} text={item} />;
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
