### Settings Card

```jsx
import React, { useState, useRef, useEffect } from 'react';

import useProjector from '../../hooks/useProjector.js';

const Component = () => {
  const { getData, setData } = useProjector();
  const [isOpen, setIsOpen] = useState(false);
  const projectorWindow = useRef();

  const handleProjectorToggle = () => {
    if (isOpen) {
      projectorWindow.current.close();
      setIsOpen(false);
    } else {
      projectorWindow.current = window.open(
        '/#!/Projector Screen/Projector Screen',
        'projector',
        'popup=1'
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
    </>
  );
};

<Component />;
```
