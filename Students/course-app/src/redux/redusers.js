// src/redux/reducers.js
import { FETCH_COURSES_SUCCESS } from './actions';

const initialState = {
  courses: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return { ...state, courses: action.payload };
    default:
      return state;
  }
};

export default rootReducer;