import React from 'react';
import {InputGroup, Form} from 'react-bootstrap'

export default function Filter({ gradeFilter, handleGradeFilterChange }) {
  return (
    <div className="filter-container mb-4">
        <InputGroup>
            <InputGroup.Text>Filter by Grade: </InputGroup.Text>
      <Form.Control
        id="gradeFilter"
        type="text"
        value={gradeFilter}
        onChange={handleGradeFilterChange}
        placeholder="Enter A-D or all"
        />
        </InputGroup>
    </div>
  );
}