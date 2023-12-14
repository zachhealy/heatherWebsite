import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';

const ConfettiButton = () => {
  const [confettiActive, setConfettiActive] = useState(false);

  const handleConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // Set the duration for confetti
  };

  return (
    <div>
      <button onClick={handleConfetti}>Click for Confetti</button>
      <Confetti active={confettiActive} />
    </div>
  );
};

export default ConfettiButton;
