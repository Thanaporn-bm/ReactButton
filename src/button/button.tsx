import React from 'react';
import * as style from './button.css';

const Button: React.FC = () => {

  return (
    <div className={style.container}>
      <button className={style.variant.primary}>Primary</button>
      <button className={style.variant.secondary}>Secondary</button>
      <button className={style.variant.tertiary}>Tertiary</button>
      <button className={style.variant.primary}disabled>Primary</button>
      <button className={style.variant.secondary}disabled>Secondary</button>
      <button className={style.variant.tertiary}disabled>Tertiary</button>
    </div>
  );
};

export default Button;