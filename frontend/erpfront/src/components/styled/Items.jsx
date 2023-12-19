import styles from 'styled-components'

export const Table = styles.table`
	border: 1px solid #ddd;
  border-collapse: collapse;
	width: 100%;
	margin: 20px auto;
  font-size: 15px;
	border-radius: 8px;
`

export const Thead = styles.thead`
    background-color: lightgray;
    color: #333;
`

export const Tr = styles.tr`
    border-bottom: 1px solid #ddd;
       &:hover{
   		background-color: #f9f9f9;
   		color: steelblue !importatnt
   	}    
    &:last-child{
      border-last
    }
`

export const Td = styles.td`
   color: #514e4e;
   padding: 4px;
   border: 1px solid lightgray;
   &:hover{
   		background-color: #faf5f5;
	    cursor: pointer
   }
`

export const Th = styles.th`
  color: #333;
  padding: 2px;
  border: 1px solid lightgray;
  border-top-right-radius: 5px
  border-top-left-radius: 50px
`

export const Tbody = styles.tbody`
  background-color: white
`


