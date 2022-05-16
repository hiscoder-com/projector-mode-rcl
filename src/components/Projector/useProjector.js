import { useEffect, useState } from 'react';

/**
 * A hook that is designed to save and write data for the projector
 * This is just an add-on for localStorage
 * For communication, we store the data in "projector_data", and listen for changes in the Projector
 * */

function useProjector() {
  const [projectorData, setProjectorData] = useState(() =>
    JSON.parse(localStorage.getItem('projector_data'))
  );

  useEffect(() => {
    localStorage.setItem('projector_data', JSON.stringify(projectorData));
  }, [projectorData]);

  // store value by specific key
  const setData = (key, value) => {
    setProjectorData((prev) => ({ ...prev, [key]: value }));
  };

  // get value by key
  const getData = (key) => {
    return projectorData[key];
  };

  // get all data
  const getAllData = () => {
    return projectorData;
  };

  return { setData, getData, getAllData };
}

export default useProjector;
