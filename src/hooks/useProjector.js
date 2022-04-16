import { useEffect, useState } from 'react';

function useProjector() {
  const [projectorData, setProjectorData] = useState(() =>
    JSON.parse(localStorage.getItem('projector_data'))
  );

  useEffect(() => {
    localStorage.setItem('projector_data', JSON.stringify(projectorData));
  }, [projectorData]);

  const setData = (key, value) => {
    setProjectorData((prev) => ({ ...prev, [key]: value }));
  };

  const getData = (key) => {
    return projectorData[key];
  };

  const getAllData = () => {
    return projectorData;
  };

  return { setData, getData, getAllData };
}

export default useProjector;
