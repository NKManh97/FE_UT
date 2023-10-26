'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useReactTable } from '@tanstack/react-table'
interface IProps {
	showModal: boolean
	setShowModal: (value: boolean) => void
}

export interface Student {
	id: number
	name: string
	email: string
}
export default function Modal(props: IProps) {
	let { showModal, setShowModal } = props
	let [name, setName] = useState('')
	let [email, setEmail] = useState('')
	const queryClient = useQueryClient()
	const { mutate: handleSubmitStudent } = useMutation({
		mutationFn: async () =>
			await axios.post('http://localhost:3001/api/students', {
				email: email,
				name: name,
			} as Student),
		onSuccess: () => {
			console.log('Create student successfully !')
			setEmail('')
			setName('')
			setShowModal(false)
			queryClient.invalidateQueries(['studentToDos'])
		},
		onError: () => {
			console.log('Something went wrong, please try again ')
		},
	})
	return (
		<>
			<Transition appear show={showModal} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setShowModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Create Student
									</Dialog.Title>
									<div className="mt-2">
										<div>
											<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
												Name
											</label>
											<input
												value={name}
												onChange={(e) => setName(e.target.value)}
												type="text"
												id="first_name"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="John"
												required
											/>
										</div>

										<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Email
										</label>
										<input
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											type="email"
											id="helper-text"
											aria-describedby="helper-text-explanation"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="name@flowbite.com"
										/>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center text-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={() => handleSubmitStudent()}
										>
											Create
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
