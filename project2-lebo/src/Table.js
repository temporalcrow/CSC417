import React from 'react';
import ReactBSTable from 'react-bootstrap/Table';
import TableRow from './TableRow';
import {courseData} from './courseData';

export default function Table({name, id, enrollDate, gradeFilter}) {

    const filteredClasses = courseData.filter(course => {
        // If gradeFilter is 'ALL', show all courses
        if (gradeFilter === "ALL") return true;
        if (gradeFilter === "") return false;
        
        // Otherwise, filter by grade
        return course.grade && course.grade.toUpperCase().includes(gradeFilter.toUpperCase());
      });
  
    return (
    <div className='m-2 p-2'>

        <div className='fs-2 fw-bold d-flex justify-content-between p-auto m-auto'>
            <p className='text-left'>Name: {name}</p>
            <p className='text-center'>WCU ID: {id}</p>
            <p className='text-end'>Date Enrolled in Major: {enrollDate}</p>
        </div>

      
        <ReactBSTable hover bordered className='m-2 border-danger'>
        <thead>
          <tr>
            <th className='border-4'>ID</th>
            <th className='border-4'>Course</th>
            <th className='border-4'>Grade</th>
            <th className='border-4'>Taken</th>
          </tr>
        </thead>
        <tbody>
        {filteredClasses.map((c) => {
            let isDiscrepant =  gradeFilter !== "" && (c.took && !c.grade) || (!c.took && c.grade);
            return (
              <TableRow
                key={c.id}
                rowData={c}
                highlightRed={isDiscrepant}
              />
            );
          })}
        </tbody>
      </ReactBSTable>
    </div>
    );
  };