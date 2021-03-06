import React from 'react'
import './Table.scss'

const Table = ({ header, rows = [] }) => {
    const getValues = (tr, td) => {
        const trValue = tr[td.key]
        const RenderTd = td.RenderTd
        if (RenderTd) {
            return <RenderTd data={tr} />
        }
        return `${trValue}`
    }

    return (
        <table>
            <thead>
                <tr>
                    {header.map((th) => (
                        <th key={th.key}>{th.value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {!rows.length && (
                    <tr>
                        <td colSpan={header.length}>No data available!</td>{' '}
                    </tr>
                )}
                {rows.map((tr) => {
                    return (
                        !tr.isHidden && (
                            <tr key={tr.objectID}>
                                {header.map((td) => (
                                    <td
                                        key={`${td.key}_${tr.objectID}_${tr.points}`}
                                    >
                                        {getValues(tr, td)}
                                    </td>
                                ))}
                            </tr>
                        )
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table
