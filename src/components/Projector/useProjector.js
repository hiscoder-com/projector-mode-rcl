import { useEffect, useState } from 'react';

/**
 * A hook that is designed to save and write data for the projector
 * This is just an add-on for localStorage
 * For communication, we store the data in "projector_data", and listen for changes in the Projector
 * */

function useProjector() {
  // store value by specific key
  const setData = (key, value) => {
    const _projector_data = JSON.parse(localStorage.getItem('projector_data'));
    const projector_data = { ..._projector_data, [key]: value };
    localStorage.setItem('projector_data', JSON.stringify(projector_data));
  };

  // get value by key
  const getData = (key) => {
    const projector_data = JSON.parse(localStorage.getItem('projector_data'));
    return projector_data?.[key];
  };

  // get all data
  const getAllData = () => {
    return JSON.parse(localStorage.getItem('projector_data'));
  };

  return { setData, getData, getAllData };
}

export default useProjector;
