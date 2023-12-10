import "./Table.css"

function Table({ title, subtitle, headers, data, includeIndex, sortable, sortFunction }) {

    const sortedData = sortable && sortFunction ? sortFunction(data) : data;

    return (
    <>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}

        <div className="card">
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
                {sortedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {includeIndex && <td>{rowIndex + 1}.</td>}
                    {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </>
    );
}

export default Table;