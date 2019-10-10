import React from 'react'
import {Container} from './styled'
import Filter from '../Filter'

const Filters = props => {
    const {onFilterChange, tipo} = props


    return(
        <Container>
            <h3>Filtrar por Tipo</h3>
            <Filter onFilterChange={onFilterChange} name="filter1" data={tipo} />
        </Container>
    )

}

export default Filters