import React from 'react';
import {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableSortLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ShowDetails from './showDetalle'

const useStyles = makeStyles({
  table: {
    minWidth: 0,
  },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const headCells = [
  { id: 'Empleado', numeric: false, disablePadding: true, label: 'Empleado' },
  { id: 'Ingreso', numeric: false, disablePadding: false, label: 'Ingreso' },
  { id: 'Egreso', numeric: false, disablePadding: false, label: 'Egreso' },
];

function EnhancedTableHead(props) {
  const {  order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function ShowHorarios() {
  const classes = useStyles();
  const [detalle, setDetalle] = useState([])
  const [mostrarDetalle, setMostrarDetalle] = useState(false)
  const [datos, setDatos] = useState([])
  const id = 1
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');

    
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    fetch(`http://192.168.1.9:82/api/Descanso?Id=${id}`)
    .then(response => response.json())
  .then(data => {return(console.log(data), setDatos(JSON.parse(data)))})
  }, [])

  

  const showDetalle = (value) => {
    setMostrarDetalle(value)
  }

  const slice = (p) => {
    if (p === null) {
        return null
    }else {
        return p.slice(11)
    }
}

  if (mostrarDetalle) {
    return(
      <>
    <ShowDetails id={detalle} />
    <Button color='primary' variant='contained' type="button" align='center' onClick={() => {showDetalle(false)}} > Volver </Button>
    </>
    )
  }
  

  return (
    <Paper >
      
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Fecha: 
        </Typography>
    <TableContainer component={Paper}>
      <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
        <TableBody>
        {stableSort(datos, getComparator(order, orderBy))
          .map((row, index) => (
            <TableRow hover onClick={() => {return(setDetalle(row), showDetalle(true))}} key={row.HorarioId} >
              
              <TableCell align="left" >{row.Empleado}</TableCell>
              <TableCell align="left">{slice(row.Ingreso)}</TableCell>
              <TableCell align="left">{slice(row.Egreso)}</TableCell>
              

            </TableRow>
            
            
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}