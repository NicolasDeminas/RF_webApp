import React from 'react';
import {InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ShowHorarios from "./showHorarios";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function SelectGroup() {
    const classes = useStyles();
    const [grupo, setGrupo] = React.useState('');
  
    const handleChange = (event) => {
      setGrupo(event.target.value);
    };
    
  const grupos = [
      {
          'id': 0,
          'grupo': 'Cajero Dia'
      },
      {
          'id': 1,
          'grupo': 'Cajero Noche'
      },
      {
          'id': 2,
          'grupo': 'Runner Dia'
      },
      {
          'id': 3,
          'grupo': 'Runner Noche'
      },
      {
          'id': 4,
          'grupo': 'Recepcion'
      },
      {
          'id': 5,
          'grupo': 'Encargados'
      },
  ]

return(
    <>
      <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Grupo</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={grupo}
        onChange={handleChange}
        label="Grupo"
      >
        <MenuItem value="">
          <em>Todos</em>
        </MenuItem>
        {grupos.map(grupo => {return(
        <MenuItem key={grupo.id} value={grupo.grupo}>{grupo.grupo}</MenuItem>
        )})}
      </Select>
      
    </FormControl>
    
    <ShowHorarios grupo={grupo}/>
    </>
)}

export default SelectGroup