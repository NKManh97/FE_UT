import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper()

export const columnDef = [
	columnHelper.accessor('id', { header: 'Id' }),
	{
		accessorFn: (row) => `${row.name}`,
		header: 'Name',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
]
