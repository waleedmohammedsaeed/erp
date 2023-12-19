import styleds from 'styled-components'

export const Apps = styleds.div`
  color: red;
  margin: auto;
  background-color: gray;
  padding: 13px
`

export const Refe = styleds.a`
    display: flex;
    flex-direction: column;
    text-decoration: none ;
    width: 128px; 
    margin: auto ;
    padding: 12px; 
    text-align: center;
    box-sizing: border-box;

    &:hover{
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 2px rgba(128, 128, 128, 0.5)
    }
`

export const TextItem = styleds.h2`
display: block;
    color: steelblue;
    font-size: 2em;
    text-align: center; 
    font-family: 'Almarai' 'courier New'
`