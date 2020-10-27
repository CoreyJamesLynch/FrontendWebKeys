import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/button';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    // Button should turn from green "primary" to red "danger" depending on if sound is active.
    <Button variant="success" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
  );
}

export default LoadingButton;
