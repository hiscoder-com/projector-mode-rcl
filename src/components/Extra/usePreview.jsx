import React from 'react';
import PropTypes from 'prop-types';

export default function usePreview() {
  return <></>;
}

usePreview.propTypes = {
  /** Link to the page with the Projector component */
  projectorLink: PropTypes.string.isRequired,
  /** Projector window width and height */
  defaultProjectorSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  /** Width and height of the preview window */
  defaultPreviewSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

usePreview.defaultProps = {
  defaultProjectorSize: { width: 800, height: 600 },
  defaultPreviewSize: { width: 200, height: 150 },
};
