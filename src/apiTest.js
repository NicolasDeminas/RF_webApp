import React, {useState, useEffect} from 'react'


function Test() {
    const [ datos, setDatos] = useState([])
    const test = []    
    
    useEffect(() => {
    fetch(`http://192.168.1.9:82/api/Descanso?Id=1`)
    //.then(response => {return(console.log(response))})
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {return(console.log(data), setDatos(JSON.parse(data)))})
    }, test)

    

    return(
        
        
        <div>
        
            
        {datos.map((d) => (
                    <div>
        <p>{d.HorarioId}</p>
        <p>{d.UsuarioId}</p>
        <p>{d.Empleado}</p>
        <p>{d.Ingreso}</p>
        <p>{d.Egreso}</p>
        <p>{d.DescansoStart}</p>
        <p>{d.DescansoStop}</p>
        
        </div>
        
))}
        </div>
    )
}

export default Test