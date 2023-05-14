import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Not Found</h1>
      <p className={styles.descr}>К сожалению данная страница не найдена!</p>
    </div>
  );
};

export default NotFoundBlock;
