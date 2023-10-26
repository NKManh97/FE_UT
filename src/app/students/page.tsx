'use client'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useReactTable } from '@tanstack/react-table'

//Components

import BasicTable from '@/components/Table/BasicTable'
import Modal from '@/components/Modal/Modal'

export interface Student {
	id: number
	name: string
	email: string
}

export default function StudentPage() {
	const [showModal, setShowModal] = useState<boolean>(false)
	return (
		<>
			<div className="flex justify-center ">
				<button onClick={() => setShowModal(true)} className="text-green-500 bg-gray-300">
					Create
				</button>
			</div>
			<BasicTable />
			<Modal showModal={showModal} setShowModal={setShowModal}></Modal>
		</>
	)

	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const queryClient = useQueryClient()

	// const { mutate: submitStudent } = useMutation({
	// 	mutationFn: async () =>
	// 		await axios.post('http://localhost:3001/api/students', {
	// 			email: email,
	// 			name: name,
	// 		} as Student),
	// 	onSuccess: () => {
	// 		console.log('Create student successfully !')
	// 		setEmail('')
	// 		setName('')
	// 		queryClient.invalidateQueries(['studentToDos'])
	// 	},
	// 	onError: () => {
	// 		console.log('Something went wrong, please try again ')
	// 	},
	// })

	// const { data, isLoading, isError } = useQuery({
	// 	queryKey: ['studentToDos'],
	// 	queryFn: async () => {
	// 		const { data } = await axios.get('http://localhost:3001/api/students', {
	// 			method: 'GET',

	// 			headers: {
	// 				'Access-Control-Allow-Origin': '*',
	// 				'Content-Type': 'application/json',
	// 			},
	// 			withCredentials: true,
	// 		})

	// 		return data as Student[]
	// 	},
	// })
	// if (isLoading) return <div>Loading .....</div>
	// if (isError) return <div>There was an error </div>

	// return (
	// 	<>
	// 		<div className="flex gap-2 min-w-full">
	// 			<input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
	// 			<input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
	// 			<button onClick={() => submitStudent()}> Submit</button>
	// 		</div>

	// 		<p></p>
	// 		<table>
	// 			<thead>
	// 				<tr>
	// 					<th>No.</th>
	// 					<th>Name</th>
	// 					<th>Gmail</th>
	// 				</tr>
	// 			</thead>
	// 			<tbody>
	// 				{data?.map((item) => {
	// 					return (
	// 						<tr key={item.id}>
	// 							<td>{item.id}</td>
	// 							<td>{item.name}</td>
	// 							<td>{item.email}</td>
	// 						</tr>
	// 					)
	// 				})}
	// 			</tbody>
	// 		</table>
	// 	</>
	// )
}
