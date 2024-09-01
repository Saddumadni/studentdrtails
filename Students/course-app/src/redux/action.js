// src/redux/actions.js
import { fetchCourses } from '../api';

export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';

export const fetchCoursesAction = () => async (dispatch) => {
  const courses = await fetchCourses();
  dispatch({ type: FETCH_COURSES_SUCCESS, payload: courses });
};