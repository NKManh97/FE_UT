'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table'

import { columnDef } from '@/components/column'
import classes from './BasicTable.module.scss'

export interface Student {
	id: number
	name: string
	email: string
}
const BasicTable = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['studentToDos'],
		queryFn: async () => {
			const { data } = await axios.get('http://localhost:3001/api/students', {
				method: 'GET',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			})

			return data as Student[]
		},
	})
	const finalColumnDef = React.useMemo(() => columnDef, [])
	const tableInstance = useReactTable({
		columns: finalColumnDef,
		data: data ?? [],
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<>
			<table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
				<thead>
					{tableInstance.getHeaderGroups().map((headerEL) => {
						return (
							<tr key={headerEL.id}>
								{headerEL.headers.map((columnEL) => {
									return (
										<th
											key={columnEL.id}
											colSpan={columnEL.colSpan}
											style={{ border: '1px solid black', borderCollapse: 'collapse' }}
										>
											{flexRender(columnEL.column.columnDef.header, columnEL.getContext())}
										</th>
									)
								})}
							</tr>
						)
					})}
				</thead>
				<tbody>
					{tableInstance.getRowModel().rows.map((rowEL) => {
						return (
							<tr key={rowEL.id}>
								{rowEL.getVisibleCells().map((cellEL) => {
									return (
										<td
											key={cellEL.id}
											style={{ border: '1px solid black', borderCollapse: 'collapse' }}
										>
											{flexRender(cellEL.column.columnDef.cell, cellEL.getContext())}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}
export default BasicTable
