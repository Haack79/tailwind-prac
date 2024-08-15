'use client';
import React, { useState } from 'react';

interface CellData {
    name: string;
    email: string;
    phone: string;
}

const Table = () => {
    const [rowClicked, setRowClicked] = useState<number | null>(null);
    const [cellData, setCellData] = useState<CellData | null>(null);

    const handleClickedRow = (row: number, e: React.MouseEvent<HTMLTableRowElement>) => {
        const cells = e.currentTarget.cells;
        const name = cells[0].textContent || '';
        const email = cells[1].textContent || '';
        const phone = cells[2].textContent || '';

        setCellData({ name, email, phone });
        setRowClicked(row);
    };

    return (
        <div className="flex justify-center items-center p-3">
            <div className="overflow-x-auto">
                <table className="border-4 border-black p-2">
                    <thead>
                        <tr className="bg-teal-600">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={(e) => handleClickedRow(1, e)}>
                            <td className="border p-2">Brian Haack</td>
                            <td className="border p-2">haack79@hotmail.com</td>
                            <td className="border p-2">9075295805</td>
                        </tr>
                        <tr onClick={(e) => handleClickedRow(2, e)}>
                            <td className="border p-2">Row 2, Cell 1</td>
                            <td className="border p-2">Row 2, Cell 2</td>
                            <td className="border p-2">Row 2, Cell 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {cellData && rowClicked && (
                <form className="flex flex-col justify-center items-center mt-4 space-y-2">
                    <input type="text" placeholder="Name" value={cellData.name} className="p-2 border rounded" readOnly />
                    <input type="text" placeholder="Email" value={cellData.email} className="p-2 border rounded" readOnly />
                    <input type="text" placeholder="Phone" value={cellData.phone} className="p-2 border rounded" readOnly />
                </form>
            )}
        </div>
    );
};

export default Table;
