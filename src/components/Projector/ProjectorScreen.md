```jsx
import React from 'react';

import { Projector } from '@texttree/projector-mode-rcl';

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
