```js {"file":"../Projector/useProjector.js"}

```

Usage example.
Here we can store and display any data.

```jsx
import React from 'react';

import { useProjector } from '@texttree/projector-mode-rcl';

// link to the page where we will have the Projector component with the desired Layout
const projectorLink = '/#!/Projector Screen/Projector Screen/1';

const Component = () => {
  const { getData, setData } = useProjector();
  const handleOpen = () => {
    window.open(projectorLink, 'projector', `popup=1,width=800,height=600`);
  };
  return (
    <>
      <button onClick={handleOpen}>Open New Window</button>
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
    </>
  );
};

<Component />;
```
