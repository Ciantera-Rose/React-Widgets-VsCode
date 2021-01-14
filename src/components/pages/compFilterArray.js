import React, { useState } from "react";

import studentData from "../students";

const CompFilterArray = () => {
  const [students, setStudent] = useState(studentData);

  const removeStudent = (id) => {
    let newStudent = students.filter((student) => student.id !== id);
    setStudent(newStudent);
  };

  const renderStudents = () => {
    return students.map((student) => {
      return (
        <div key={student.id}>
          <p>{student.name}</p>
        </div>
      );
    });
  };

  return <div>{renderStudents()}</div>; //<button onClick={() => removeStudent(id)}>remove</button>;
};

export default CompFilterArray;
