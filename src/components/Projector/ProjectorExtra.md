### Settings Card

```jsx
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

import useProjector from '../../hooks/useProjector.js';

const Component = () => {
  const { getData, setData } = useProjector();

  const [isOpen, setIsOpen] = useState(false);

  const projectorWindow = useRef();
  const previewRef = useRef();

  const [projectorWindowSize, setProjectorWindowSize] = useState({
    height: 540,
    width: 960,
  });

  useEffect(() => {
    const iframe = previewRef.current.contentWindow;
    const updatePosition = () => {
      if (projectorWindow.current) {
        projectorWindow.current.scrollTo(0, iframe.pageYOffset);
      }
    };
    iframe.document.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => iframe.document.removeEventListener('scroll', updatePosition);
  }, [isOpen]);

  useLayoutEffect(() => {
    function updateProjectorWindowSize() {
      setProjectorWindowSize({
        width: projectorWindow.current.innerWidth,
        height: projectorWindow.current.innerHeight,
      });
    }
    if (isOpen && projectorWindow.current) {
      projectorWindow.current.addEventListener('resize', updateProjectorWindowSize);
      updateProjectorWindowSize();
    }
    return () =>
      projectorWindow.current.removeEventListener('resize', updateProjectorWindowSize);
  }, [isOpen]);

  const handleProjectorToggle = () => {
    if (isOpen) {
      projectorWindow.current.close();
      setIsOpen(false);
    } else {
      projectorWindow.current = window.open(
        '/#!/Projector Screen/Projector Screen',
        'projector',
        `popup=1,width=${projectorWindowSize.width},height=${projectorWindowSize.height}`
      );
      setIsOpen(true);
    }
  };

  return (
    <>
      <button onClick={handleProjectorToggle}>
        {isOpen ? 'Close' : 'Open'} New Window
      </button>
      <br />
      <input
        value={getData('verse')}
        onChange={(e) => setData('verse', e.target.value)}
      />
      <br />
      <input
        value={getData('reference')}
        onChange={(e) => setData('reference', e.target.value)}
      />
      <br />
      <label>Font Size</label>
      <br />
      <input
        type="range"
        min="50"
        onChange={(e) => setData('fontSize', e.target.value)}
        value={getData('fontSize')}
        max="300"
      />
      <br />
      <label>Preview</label>
      <br />
      <div
        style={{
          width: '322px',
          height: '182px',
          background: '#eee',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #ccc',
          overflow: 'hidden',
        }}
      >
        <div>
          <iframe
            ref={previewRef}
            title="Projector"
            style={{
              width: projectorWindowSize.width + 'px',
              height: projectorWindowSize.height + 'px',
              background: 'white',
              transform: `scale(calc(${
                projectorWindowSize.height / projectorWindowSize.width > 180 / 320
                  ? 180 / projectorWindowSize.height
                  : 320 / projectorWindowSize.width
              }))`,
            }}
            src="/#!/Projector Screen/Projector Screen"
          ></iframe>
        </div>
      </div>
    </>
  );
};

<Component />;
```
