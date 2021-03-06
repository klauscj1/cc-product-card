import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductoCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  //TODO: isMaxReached = useCallback [counter,maxCount]
  //TRUE si counter==maxCount
  //FALSE si no el

  return (
    <div className={`${styles.buttonsContainer} ${className} `} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
