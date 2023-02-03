import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DataJson from './objects.json'


export default function DenseTable() {
    //let [apiData, setApiData] = React.useState("")
    const headers = Object.keys(DataJson[0]).map((item)=>{return <TableCell>{item}</TableCell> })
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers}
          </TableRow>
        </TableHead>
        <TableBody>
          {DataJson.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >{Object.keys(row).map((key)=>{return <TableCell component="th" scope="row">
            {row[key]}
          </TableCell>})}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
