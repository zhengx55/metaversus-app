'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { startingFeatures } from '../constants';
import { TitleText, TypingText } from '../components';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}>
      <motion.div variants={planetVariants('left')}></motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
