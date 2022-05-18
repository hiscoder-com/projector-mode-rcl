```js {"file":"../Projector/useProjector.js"}

```

Usage example.
Here we can store and display any data.

```jsx
import React, { useState } from 'react';

import { useProjector } from '@texttree/projector-mode-rcl';

// link to the page where we will have the Projector component with the desired Layout
const projectorLink = '/#!/Projector Screen/Projector Screen/1';

const Component = () => {
  const { getData, setData } = useProjector();
  const [verse, setVerse] = useState(() => getData('verse'));
  const [reference, setReference] = useState(() => getData('reference'));
  const [fontSize, setFontSize] = useState(() => getData('fontSize'));

  const handleOpen = () => {
    window.open(projectorLink, 'projector', `popup=1,width=800,height=600`);
  };
  return (
    <>
      <button onClick={handleOpen}>Open New Window</button>
      <br />
      <input
        value={verse}
        onChange={(e) => {
          setVerse(e.target.value);
          setData('verse', e.target.value);
        }}
      />
      <br />
      <input
        value={reference}
        onChange={(e) => {
          setReference(e.target.value);
          setData('reference', e.target.value);
        }}
      />
      <br />
      <label>Font Size</label>
      <br />
      <input
        type="range"
        min="50"
        value={fontSize}
        onChange={(e) => {
          setFontSize(e.target.value);
          setData('fontSize', e.target.value);
        }}
        max="300"
      />
      <br />
    </>
  );
};

<Component />;
```
