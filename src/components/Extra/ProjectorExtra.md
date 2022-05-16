If you want to show a preview, you can use this example along with the hook as a template.
<br/>
If you scroll the screen in preview mode, then the content in the second window will be scrolled

```jsx
import React from 'react';

import { useProjector, usePreview } from '@texttree/projector-mode-rcl';

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

const projectorLink = '/#!/Projector Screen/Projector Screen/1';

const Component = () => {
  const { getData, setData } = useProjector();

  const { handleProjectorToggle, isOpen, projectorWindowSize, previewRef, scale } =
    usePreview({
      projectorLink,
      defaultProjectorSize: { height: 540, width: 960 },
      defaultPreviewSize: { width: 180, height: 320 },
    });

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
      <label>Preview</label>
      <br />
      {/*this div needs to be set to a size and can be customized*/}
      <div style={{ width: '500px', height: '200px', border: '1px solid #aaa' }}>
        {/* this part must be the same for the code to work properly */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              transform: `scale(${scale})`,
            }}
          >
            <iframe
              ref={previewRef}
              title="Projector"
              style={{
                border: 'none',
                width: projectorWindowSize.width + 'px',
                height: projectorWindowSize.height + 'px',
                background: 'white',
              }}
              src={projectorLink}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

<Component />;
```
