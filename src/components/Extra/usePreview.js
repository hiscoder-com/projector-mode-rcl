import { useEffect, useLayoutEffect, useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * A hook that allows you to customize the window preview
 *
 * @param {Object} props - data object
 * @param {string} props.projectorLink - Link to the page with the Projector component
 * @param {Object} props.defaultProjectorSize - default size of Projector window
 * @param {number} props.defaultProjectorSize.width - width in px
 * @param {number} props.defaultProjectorSize.height - height in px
 * @param {Object} props.defaultPreviewSize - Default size of preview
 * @param {number} props.defaultPreviewSize.width - width in px
 * @param {number} props.defaultPreviewSize.height - height in px
 */

export default function usePreview({
  projectorLink,
  defaultProjectorSize,
  defaultPreviewSize,
}) {
  // State whether a new window is open or not
  // TODO if you close the new window manually, the state will not change.
  // Alternatively, you can check every second whether the window was closed or not.
  const [isOpen, setIsOpen] = useState(false);

  // Ref to an additional window with a projector
  const projectorWindowRef = useRef();

  // Ref to the iframe in which the preview will be
  const previewRef = useRef();

  const [projectorWindowSize, setProjectorWindowSize] = useState(defaultProjectorSize);

  // track the position of the scroll in the preview,
  // to scroll the projector screen to the same position
  useEffect(() => {
    const iframe = previewRef.current.contentWindow;
    const updatePosition = () => {
      if (projectorWindowRef.current) {
        projectorWindowRef.current.scrollTo(0, iframe.pageYOffset);
      }
    };
    iframe.document.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => iframe.document.removeEventListener('scroll', updatePosition);
  }, [isOpen]);

  // listen for the screen resize event so that we can show the same sizes in the preview
  useLayoutEffect(() => {
    function updateProjectorWindowSize() {
      setProjectorWindowSize({
        width: projectorWindowRef.current.innerWidth,
        height: projectorWindowRef.current.innerHeight,
      });
    }
    if (isOpen && projectorWindowRef.current) {
      projectorWindowRef.current.addEventListener('resize', updateProjectorWindowSize);
      updateProjectorWindowSize();
    }
    return () =>
      projectorWindowRef.current.removeEventListener('resize', updateProjectorWindowSize);
  }, [isOpen]);

  // Open a new window with the desired size, and save a ref to this window
  // If it's already open, then close it.
  const handleProjectorToggle = () => {
    if (isOpen) {
      projectorWindowRef.current.close();
      setIsOpen(false);
    } else {
      projectorWindowRef.current = window.open(
        projectorLink,
        'projector',
        `popup=1,width=${projectorWindowSize.width},height=${projectorWindowSize.height}`
      );
      setIsOpen(true);
    }
  };

  const [previewSize, setPreviewSize] = useState(defaultPreviewSize);

  // Size of the div in which we have an iframe with a preview.
  // Needed to reduce the size of the iframe proportionally.
  // TODO will not work correctly,
  // if the size will change (eg responsive design).
  // Maybe need to put something into a dependency, or add another useRef
  useLayoutEffect(() => {
    const { offsetHeight, offsetWidth } = previewRef.current.parentNode.parentNode;
    setPreviewSize({ height: offsetHeight, width: offsetWidth });
  }, []);

  // We change the size of the preview window through the css property transform: scale().
  // Here we calculate the scaling factor.
  const scale = useMemo(() => {
    if (
      [previewSize.width, projectorWindowSize.width, projectorWindowSize.height].includes(
        '0'
      )
    ) {
      // Since it is impossible to divide by 0, we will immediately return 0
      // TODO need to check if this code works
      return 0;
    }
    return projectorWindowSize.height / projectorWindowSize.width >
      previewSize.height / previewSize.width
      ? previewSize.height / projectorWindowSize.height
      : previewSize.width / projectorWindowSize.width;
  }, [projectorWindowSize, previewSize]);

  return {
    handleProjectorToggle,
    isOpen,
    projectorWindowRef,
    previewRef,
    projectorWindowSize,
    previewSize,
    scale,
  };
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
