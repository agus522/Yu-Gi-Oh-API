import styled from 'styled-components'

const Container = styled.div`
    height: 450px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${require('../../assets/slide.jpg')});
    position: relative;

    h1 {
    font-size: 64px;
    color: #ffffff;
    position: absolute;
    left: 760px;
    bottom: 170px;
    }

    h3{
        font-weight: 300
        font-size: 22px;
        color: #ffffff;
        position: absolute;
        left: 720px;
        bottom: 140px;

    }
`

export {Container}