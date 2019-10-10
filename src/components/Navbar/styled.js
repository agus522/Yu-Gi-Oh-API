import styled from 'styled-components'

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 0px 10%;
    background-color: black;

    h1 {
        width: 200px;
        height: 100px;
    }
    
    /* resize images */
    h1 img {
        width: 100%;
        height: auto;
    }

    p{
        font-size: 18px;
        color: #ffffff;
    }
`

export {Container}