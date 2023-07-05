import React, { useMemo } from 'react';
import { Column, useTable, HeaderGroup, Row, Cell } from 'react-table';

interface Stats {
  _id: {
    space: {
      name: string;
    };
  };
  count: number;
}

interface StatisticsTableProps {
  stats: Stats[];
}

type DataColumn = Column<Stats>;

function StatisticsTable({ stats }: StatisticsTableProps) {
  const data = useMemo(() => stats, [stats]);
  const columns: DataColumn[] = useMemo(() => [
    {
      Header: 'Space',
      accessor: '_id.space.name',
    },
    {
      Header: 'Count',
      accessor: 'count',
    },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: stats });

  return (
    <table {...getTableProps()} className="table-auto border-collapse w-full">
      <thead>
        {headerGroups.map((headerGroup: HeaderGroup<Stats>) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-700 text-white text-left">
            {headerGroup.headers.map((column: Column<Stats>) => (
              <th {...column.getHeaderProps()} className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-gray-700">
        {rows.map((row: Row<Stats>) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border-t">
              {row.cells.map((cell: Cell<Stats>) => (
                <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StatisticsTable;
