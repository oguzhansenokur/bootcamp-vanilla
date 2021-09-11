import ReactTable from "react-table";  

import { useTable } from 'react-table'


const App = () => {
  const data = {
    currencies: [
        {
            exchangeType: 'USD/TRY',
            exchangeFrom: 'DOLAR',
            exchangeTo: 'TL',
            buy: '8,4430',
            sell: '8,4491',
            diff: '%1,24'
        },
        {
            exchangeType: 'EUR/TRY',
            exchangeFrom: 'EURO',
            exchangeTo: 'TL',
            buy: '9,9897',
            sell: '9,9951',
            diff: '%1,06'
        },
        {
            exchangeType: 'GBP/TRY',
            exchangeFrom: 'STERLIN',
            exchangeTo: 'TL',
            buy: '11,6447',
            sell: '11,6588',
            diff: '%1,11'
        }
    ]
}

const columns=[{
  Header: 'Döviz Cinsi',  
       accessor: 'exchangeType'  
      },{  
    Header:'Alış(TL)',
    accessor:'buy'

},
{
  Header:'Satış(TL)',
  accessor:'sell'
},
{
  Header:'Fark(%)',
  accessor:'diff'
}]



const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
  );
}

export default App;
