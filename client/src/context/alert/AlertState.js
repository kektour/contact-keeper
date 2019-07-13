import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertConterxt from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

function AlertState(props) {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };

  return (
    <AlertConterxt.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertConterxt.Provider>
  );
}

export default AlertState;
