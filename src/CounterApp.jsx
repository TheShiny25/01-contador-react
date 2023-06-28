import styled from "styled-components"
import './CounterApp.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const Autor = styled.div`
    padding: 10px;
    background-color: #2185D5;
    display: inline-block;
    border-radius: 5px;
    margin: 10px;
    color: #ffffff;
`;
const ContenedorPrincipal = styled.div`
    width: 100%;
    height: 100vh;
    display: inline-block;
    background-color: #282c34;
`;
const BloqueContador = styled.div`
    margin: 10px 10%;
`;
const Titulo = styled.h1`
    color: #fff;
    text-align: center;
`;

const Hr = styled.hr`
    margin: 4% 0px;
`;
const Numero = styled.div`
    width:200px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 100px;
    margin: 0 auto;
    text-align: center;
    font-size: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;
const ListButton = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    margin: 2% 0;
`;
const Button = styled.button`
    height: 50px;
    cursor: pointer;
    width: 50px;
    border-radius:25px;
    font-size: 35px;
    background-color: #2185D5;
    color: #ffffff;
    border: 0;
    font-weight: bold;
`;


export const CounterApp = () => {
    const [Counter, setCounter] = useState(0);

    const btnIncrement = () => {
        setCounter(Counter + 1)
    }
    const btnDecrement = () => {
        if (Counter == 0) return
        setCounter(Counter - 1)
    }

    return (
        <ContenedorPrincipal>
            <Link to="https://theshiny25.github.io/Mi-Portafolio/" target="_blank">
                <Autor>{">"}_Gustavo</Autor>
            </Link>
            <BloqueContador>
                <Titulo>Contador - React</Titulo>
                <Hr />
                <Numero>{Counter}</Numero>
                <ListButton>
                    <Button onClick={btnDecrement}> - </Button>
                    <Button onClick={btnIncrement}> + </Button>
                </ListButton>
            </BloqueContador>

        </ContenedorPrincipal>
    )
}
