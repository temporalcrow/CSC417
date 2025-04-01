export default function TableRow ({rowData, highlightRed}) {
    const rowStyle = highlightRed ? {color: 'red'} : {};
    return(
        <tr>
            <td className="border-4">{rowData.id}</td>
            <td className='border-4 fw-bold' style={rowStyle}>{rowData.title}</td>
            <td className='border-4'>{rowData.grade}</td>
            <td className='border-4'>{rowData.took ? 'Yes' : 'No'}</td>
        </tr>
    )
}