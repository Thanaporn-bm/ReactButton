//import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './Components';


export function App() {
  return (
    <div>
      <Button variant="primary" text="Primary" onClick={() => alert('Primary Button clicked!')}/>
      <Button variant="secondary" text="Secondary" onClick={() => alert('Secondary Button clicked!')} />
      <Button variant="tertiary" text="Tertiary" onClick={() => alert('Tertiary Button clicked!')}/>
    </div>
  );

}


