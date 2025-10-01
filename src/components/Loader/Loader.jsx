import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.coffeeLoader}>
       
        <div className={styles.coffeeCup}>
          <div className={styles.coffeeCupHandle}></div>
          <div className={styles.coffeeLiquid}></div>
        </div>
    
        <div className={styles.saucer}></div>
      </div>
      <div className={styles.loadingText}>Brewing your coffee...</div>
    </div>
  );
};

export default Loader;