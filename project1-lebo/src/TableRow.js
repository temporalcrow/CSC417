export default function TableRow ({rowData, rowSpan}) {
    return(
        <tr>
            {rowSpan > 0 && <td rowSpan={rowSpan} className="border-4 text-decoration-underline text-center align-middle fw-bold">{rowData.requirement}</td>}
            <td className='border-4 fw-bold'>{rowData.description}</td>
            <td className='border-4'>{rowData.semester}</td>
            <td className='border-4'>{rowData.prefix}</td>
            <td className='border-4'>{rowData.number}</td>
            <td className='border-4'>{rowData.grade}</td>
        </tr>
    )
}