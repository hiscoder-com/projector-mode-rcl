### Minimal example

```jsx
import React from 'react';

import { Projector } from '@texttree/projector-mode-rcl';

const Empty = () => <>Empty Layout</>;

<Projector Layout={Empty} />;
```

### Extend example

```jsx
import React from 'react';

import { Projector } from '@texttree/projector-mode-rcl';
/* Set the default values for the screen.
This code is for demonstration purposes only. */
localStorage.setItem(
  'projector_data',
  JSON.stringify({
    fontSize: '150',
    verse: 'Verse Text',
    reference: 'Gen 4:3',
  })
);

const ScreenLayout = ({ fontSize, verse, reference }) => {
  return (
    <div style={{ fontSize: fontSize + '%' }}>
      <p>{verse}</p>
      <b>
        <small>{reference}</small>
      </b>
    </div>
  );
};

const Component = () => {
  return <Projector Layout={ScreenLayout} />;
};

<Component />;
```
