import React, { useState, useEffect } from 'react';

function Screenresize() {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getScreenSize() {
    const width = window.innerWidth;
    if (width >= 1024) {
      return 'desktop';
    } else if (width >= 768 && width <= 1023) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }

  return (
    <div className='screenresize'>
      {screenSize === 'desktop' && <p>This is displayed only on desktop.</p>}
      {screenSize === 'tablet' && <p>This is displayed only on tablet.</p>}
      {screenSize === 'mobile' && <p>This is displayed only on mobile.</p>}
    </div>
  );
}

export default Screenresize;
