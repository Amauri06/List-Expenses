import React from "react";
import styled from "styled-components";
import { ReactComponent as IconArrow } from "../img/flecha.svg";
import {useNavigate} from 'react-router-dom'


const Btn = styled.button`
    display: block;
    width: 3.12rem; /* 50px */
    height: 3.12rem; /* 50px */
    line-height: 3.12rem; /* 50px */
    text-align: center;
    margin-right: 1.25rem; /* 20px */
    border: none;
    background: #010a44;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem; /* 5px */
    cursor: pointer;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;
 
const Icon = styled(IconArrow)`
    width: 50%;
    height: auto;
    fill: #fff;
`;

const BtnReturn = ({route = '/' })=>{
    const navigate = useNavigate()

    return(
        <Btn onClick={()=> navigate(route) }> <Icon/> </Btn>
    )
}

export default BtnReturn;
