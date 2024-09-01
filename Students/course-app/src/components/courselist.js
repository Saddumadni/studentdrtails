// src/components/CourseList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesAction } from '../redux/actions';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  
  useEffect(() => {
    dispatch(fetchCoursesAction());
  }, [dispatch]);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              {course.name} - {course.instructor}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;