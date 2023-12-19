import {Table, Thead, Th, Tbody, Tr, Td} from '../styled/Items'

export const InventoryDash = () => {
	return(
		<section className='m-auto'>
			<div className='px-3 py-2'>
				<input type="text" placeholder='بحث' className='border'/>
			</div>
			
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

					<Tr>
						<Td>3</Td>
						<Td>تلفزيون</Td>
						<Td>3000</Td>
					</Tr>

					<Tr>
						<Td>4</Td>
						<Td>مكيف سبلت</Td>
						<Td>250</Td>
					</Tr>
											
					<Tr>
						<Td>5</Td>
						<Td>مكواة</Td>
						<Td>200</Td>
					</Tr>
					
				</Tbody>
			</Table>
		</section>
	)

}