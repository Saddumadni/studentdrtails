// src/components/StudentDashboard.js
import React from 'react';

const StudentDashboard = () => {
  // This would be fetched from a real API in a full implementation
  const enrolledCourses = [
    { id: 1, name: 'Introduction to React Native', instructor: 'John Doe', dueDate: '2023-12-01', progress: 50 },
    // Add more enrolled courses as needed
  ];

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <h3>{course.name} - {course.instructor}</h3>
            <p>Due Date: {course.dueDate}</p>
            <div style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
              <div style={{ width: `${course.progress}%`, backgroundColor: '#3b5998', height: '10px' }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;