import React, { useEffect, useState } from 'react';
import { log } from '../../utils';
import PropTypes from 'prop-types';

function Projector({ Layout }) {
  const [projectorData, setProjectorData] = useState(
    JSON.parse(localStorage.getItem('projector_data'))
  );

  log({ projectorData });

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
  Layout: PropTypes.elementType.isRequired,
};

export default Projector;
