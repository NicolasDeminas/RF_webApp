import React from 'react'
import { Grid, Card, Typography } from '@material-ui/core'

function ShowDetails(props) {

    const slice = (p) => {
        if (p === null) {
            return null
        }else {
            return p.slice(11)
        }
    }

    return (
        <Grid item xs={12} align='center'> 
        <Card>
        
        <Typography variant='h2' component='h2'> Detalle</Typography>
            <p>Empleado: {props.id.Empleado}</p>
            <p>Ingreso Descanso: {slice(props.id.DescansoStart)}</p>
            <p>Engreso Descanso: {slice(props.id.DescansoStop)}</p>
        </Card>
        </Grid>
    )
}

export default ShowDetails