import { useLocation } from "react-router-dom";
import "./Table.css"

function Table({ table }) {
    const location = useLocation();
    const data = location.state["data"];

    const sortedData = table.sortable ? data.slice().sort((a, b) => b[3] - a[3]) : data;
    
    return (
    <>
        <h2>{table.title}</h2>
        {table.subtitle && <p>{table.subtitle}</p>}

        <div className="card">
        <table>
            <thead>
            <tr>
                {table.headers.map((header, index) => (
                <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
                {sortedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {table.includeIndex && <td>{rowIndex + 1}.</td>}
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