import ClassTable from './Table';
import React, {useState} from 'react';
import Filter from './Filter';
import { Container } from 'react-bootstrap';

function App() {
  const [gradeFilter, setGradeFilter] = useState("ALL");

  const handleGradeFilterChange = (event) => {
    const value = event.target.value;
    setGradeFilter(value.toUpperCase());
  }

  return (
    <Container fluid className="App">
      <div className="my-4 px-3">
        <Filter gradeFilter={gradeFilter} handleGradeFilterChange={handleGradeFilterChange} />
      </div>
      <ClassTable name ="Drew Lebo" id="0979419" enrollDate = "Fall 2021" gradeFilter={gradeFilter}/>
    </Container>
  );
}

export default App;
