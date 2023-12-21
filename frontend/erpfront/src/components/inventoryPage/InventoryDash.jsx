import React, {useState, useEffect} from 'react'
import {Table, Thead, Th, Tbody, Tr, Td} from '../styled/Items'
import axios from 'axios';

export const InventoryDash = () => {
	const [inventory, setInventory] = useState()
	useEffect(() => {
		// let responseClone;
		const pro = async()=> {
			fetch('http://127.0.0.1:8000/inventories').
				then(response=> {
						return response.json()
					}).
					then(data => {
						setInventory(data)
						console.log(inventory)
					})
									
		}			
		// axios.get('http://127.0.0.1:8000/inventories').then(data => setInventory(data))
		// console.log(inventory)
		// setInventory(inventory)
		pro()
		// const getAllData = async() => {
		// 	let url = "http://127.0.0.1:8000/inventories"
		// 	const response = await fetch(url, {
		// 		method: "GET",
		// 		mode: "cors",
		// 		cache: "no-cache",
		// 		credentials: "same-origin",
		// 		headers: {
		// 		"Content-Type": "application/json",
		// 		},
		// 		redirect: "follow",
		// 		referrerPolicy: "no-referrer",
		// 	});
		// 	const data = await response.json();
		// 	setInventory(data)
		// 	console.log(inventory);
		// }
		// getAllData()
	}, [])
	
	return(
		<section className='m-auto'>
			{/* <div>
				{inventory.map(inv => <div>{inv.location}</div>)}
			</div>
			{inventory} */}
			{/* <div className='px-3 py-2'>
				<input type="text" placeholder='بحث' className='border'/>
			</div>
			<div className="grid grid-cols-2">
				<div>
					<ul>
						{inventory.map(inv => {<li>{inv}</li>})}
					</ul>
				</div>
				<div>
					<Table>
						<Thead>		    	
							<Tr>
								<Th>No</Th>
								<Th>Name</Th>
								<Th>الوحدات</Th>
							</Tr>
						</Thead>
						<Tbody>
												
							<Tr className='text-blue-600'>   		
								<Td className='text-center'>2</Td>
								<Td>تلاجة كبيرة</Td>
								<Td>12004</Td>
							</Tr>		    
							
						</Tbody>
					</Table>
				</div>
			</div> */}
			
		</section>
	)

}