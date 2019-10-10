import React from 'react';
import './index.css';
import { Container } from './styled'
import Header from '../Header'
import Navbar from '../Navbar'
import Filters from '../Filters'
import Grilla from '../Grilla'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartas:[],
            cartasBkp:[],
            tipo:[],
            loading:true,
            filters: {
                filter1: 'select',
            //  filter2: 'select'
            }
        }
        this.handleFilterChange = this.handleFilterChange.bind(this) //IMPORTANTE
        this.handleFilter = this.handleFilter.bind(this) //IMPORTANTE
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://cartetasfacu.herokuapp.com/cartas')
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json()
            //console.log(json)
            const tipodecarta = json.map(({tipocarta}) => tipocarta)
            const tipodecartaUnrepeated = Array.from(new Set(tipodecarta))
            const tipodecartaUnrepeatedOrdered = tipodecartaUnrepeated.sort((a, b) => (a < b) ? 1 : -1).slice()
            console.log("prueba",json);
            this.setState({
                cartas: json,
                cartasBkp: json,
                tipo:tipodecartaUnrepeatedOrdered,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleFilter(payload){
        const {filter1, filter2} = payload
        console.log(filter1);
        const {cartasBkp} = this.state
        console.log("cartas",cartasBkp);
        const filteredCartas = cartasBkp.filter(carta => {
            return carta.tipocarta === (filter1 !== 'select' ? filter1 : carta.tipocarta )
        })
        return filteredCartas
    }

    handleFilterChange(event) {
        let payload = this.state.filters
        payload[event.target.name] = event.target.value
        const cartasFiltered = this.handleFilter(payload)
        console.log(cartasFiltered)
        this.setState({
            filters: payload,
            cartas:cartasFiltered
        })
    }


    render() {
        return (
            <Container>
                <Navbar />
                <Header />
                <div className="inner">
                    <Filters
                    filters={this.state.filters}
                    tipo={this.state.tipo}
                    onFilterChange={this.handleFilterChange} 
                     />
                    {!this.state.loading && <Grilla cartas={this.state.cartas} />}
                </div>
            </Container>
        );
    }
}

export default App;
