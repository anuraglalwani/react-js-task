import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  
  myCell: {
     width: 100,
     backgroundColor: "#FFEBC9"
  }

});

 function BasicTable(props) {
    const classes = useStyles();

  function createData(provider,title,id,snippet,datePublished) {
  return { provider,title,id,snippet,datePublished };
}

const rows = [
  createData(props.provider,props.title,props.id,props.snippet,props.datePublished)
];

// using props to show data in the table format
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className={classes.myCell} align="left">Newspaper Name</TableCell>
           <TableCell className={classes.myCell} align="left">Newspaper id</TableCell>
            <TableCell className={classes.myCell} align="left">Published Date</TableCell>
            <TableCell className={classes.myCell} align="left">Title</TableCell>
            <TableCell className={classes.myCell} align="left">Snippet</TableCell>
           
          </TableRow>
        </TableHead>
        
        <TableBody>

        {
          rows.map((row) => (
          <TableRow  key={row.id}>
              <TableCell className={classes.myCell} align="left"> {row.provider} </TableCell>
              <TableCell className={classes.myCell} align="left"> {row.id} </TableCell> 
              <TableCell className={classes.myCell} align="left"> {row.datePublished} </TableCell>
              <TableCell className={classes.myCell} align="left"> {row.title} </TableCell>
              <TableCell className={classes.myCell} align="left"> {row.snippet} </TableCell> 
            </TableRow>
          ))
          }
          </TableBody>
      </Table>
    </TableContainer>
  );

 
}
export default BasicTable;

