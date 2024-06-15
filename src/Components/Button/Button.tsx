//import React, { ButtonHTMLAttributes } from 'react';
import { button,ButtonVariants } from './Button.css';

type TypeButton = ButtonVariants & {
  text: string;
};

export const Button = ({variant, text}: TypeButton) => {

  return (
    <button className={button({ variant })}>{text}</button>
  );
};