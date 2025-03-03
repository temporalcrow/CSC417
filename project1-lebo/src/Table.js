import ReactBSTable from 'react-bootstrap/Table';
import TableRow from './TableRow'

export default function Table({name, id, enrollDate}) {
    const classes = [
        {requirement: "Academic Foundations", description: "First-Year Experience", semester: "Fall 2021", prefix: "FYE", number: "100G", grade: "B+"},
        {requirement: "Academic Foundations", description: "English Composition", semester: "Fall 2021", prefix: "WRT", number: "120", grade: "B"},
        {requirement: "Academic Foundations", description: "English Composition 200-level", semester: "Spring 2022", prefix: "WRT", number: "104", grade: "A-"},
        {requirement: "Academic Foundations", description: "Mathematics (C- or better required)***", semester: "Fall 2021", prefix: "MAT",number: "151", grade: "C+"},
        {requirement: "Academic Foundations", description: "Interdisciplinary (I)", semester: "Spring 2024", prefix: "SWO", number: "351", grade: "A"},
        {requirement: "Academic Foundations", description: "Diverse Communities (J) ***", semester: "Spring 2024", prefix: "WOS", number: "225", grade: "A"}
    ];

    const rowSpanMap = {};
    classes.forEach((c) => {
        rowSpanMap[c.requirement] = (rowSpanMap[c.requirement] || 0) + 1;
    })

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
                <th className='border-4'>Requirement</th>
                <th className='border-4'>Description</th>
                <th className='border-4'>Semester</th>
                <th className='border-4'>Prefix</th>
                <th className='border-4'>Number</th>
                <th className='border-4'>Grade</th>
            </tr>
        </thead>
        <tbody>
            {classes.map((c, index) => {
                const isFirstOccurrence = index === 0 || c.requirement !== classes[index - 1].requirement;
                const rowSpan = isFirstOccurrence ? rowSpanMap[c.requirement] : 0;
                return <TableRow key={c.description} rowData={c} rowSpan={rowSpan}></TableRow>
            })}
        </tbody>
      </ReactBSTable>
    </div>
    );
  };