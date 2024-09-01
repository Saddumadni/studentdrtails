// src/components/CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.courses);
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      <h3>Syllabus</h3>
      <ul>
        {course.syllabus.map((item) => (
          <li key={item.week}>{item.topic}: {item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;