import styled from 'styled-components'

const Container = styled.div`

text-align: center;

select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 60px 0 10px 0;
    padding: 10px;
    padding-right: 1.5em;
    width: auto;
    min-width: 200px;
    outline: none;
    font-family: sans-serif;
    font-size: 12pt;
    font-weight: 400;
    text-indent: 0.01px;
    text-overflow: '';
    border: 1px solid black
    border-radius: 20px;
    color: rgba(0,0,0,.7);
    background-color: rgba(255,255,255,.5);
    background-repeat: no-repeat;
    background-position: calc(100% - .5em) 50%;
    background-size: 12px;
    transition: all .2s ease-in-out;
    box-shadow: rgba(0,0,0,.15) 0 1px 0;
     color: black;

     cursor: pointer
  }

  h3{
    display: inline;
    margin: 0 15px 0 15px;
    font-weight: 600;
    letter-spacing: 0.3px

  }
}
`

export {Container}