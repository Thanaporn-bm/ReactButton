//import React, { ButtonHTMLAttributes } from 'react';
import { button,ButtonVariants } from './Button.css';

type TypeButton = ButtonVariants & {
  text: string;
  onClick?: () => void;
};

export const Button = ({variant, text, onClick}: TypeButton) => {

  return (
    <button className={button({ variant })} onClick={onClick}>{text}</button>
  );
};