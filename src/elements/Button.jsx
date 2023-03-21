import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const Button = styled(Link)`
    background: #010a44;
    height: 45px;
    font-size: 20px; 
    min-width: 15px;
    font-weight: 550;
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 20px;
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    padding: 1.25rem 1.87rem; /* 20px 30px */
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;


    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '18px'};  
        fill: white;
    }
    

    @media(max-width: 480px){ 

        font-size: 18px;
        height: 50px;

        ${props => props.btn && css`
             font-size: 50px;
              
        `}

        ${props => props.primario && css`
             margin-bottom: 60px;
              
        `}
         
        ${props => props.secundario && css`
             margin: 40px 0 25px 0;
             margin-left: 260px;
             border-radius: 10px;
             width: 148px;
             font-size: 14px;
             height: 45px;
             text-align: center;
             
        `}
         
    }

   
`;

export default Button;