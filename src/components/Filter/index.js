import React from 'react'

const Filter = props => {
    const { onFilterChange, name, data } = props
    const opciones = data.map(option => <option value={option}>{option}</option>)
    return(
        
        <select onChange ={onFilterChange} name={name}>
            <option value="select">Todos</option>
            {opciones}
        </select>
    )
}

export default Filter