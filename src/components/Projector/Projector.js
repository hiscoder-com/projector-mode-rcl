import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper component for the second screen.
 * On the second screen, you can use variables that are set via the useProjector hook.
 * For interaction between windows, we use localstorage.
 * The event fires if changes have been made to localstorage in another window.
 * It will not work to listen for events on the current page.
 *
 * @param {Object} props
 * @param {ReactComponentElement} props.Layout - React Component
 * @returns
 */
export default function Projector({ Layout }) {
  const [projectorData, setProjectorData] = useState(
    JSON.parse(localStorage.getItem('projector_data'))
  );

  useEffect(() => {
    const changed = (e) => {
      if (e.key === 'projector_data') {
        setProjectorData(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', changed, false);
    return () => window.removeEventListener('storage', changed);
  }, []);

  return <Layout {...projectorData} />;
}

Projector.propTypes = {
  /*React component with layout for the second screen*/
  Layout: PropTypes.elementType.isRequired,
};
