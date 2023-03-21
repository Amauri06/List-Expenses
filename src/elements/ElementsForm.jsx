
import styled, { css } from "styled-components";
import theme from "../theme";


const ContainerFilters = styled.div`
    display: flex;
    margin-bottom: 30px; 
    align-items: center;
    width: 100%;
    height: 80px;
    justify-content: space-between;

     

    @media screen and (max-width: 811px) {
       
        flex-direction:  column-reverse;
        align-items: center;
        height: 120px;  
        
    }


    @media screen and (max-width: 480px) {
        margin-bottom: 50px;     
       
   }

`;
 
const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: auto;
    height: 80%;
   
    .user{
       
        font-size: 30px;
        text-align: center;
        padding: 25px;
      
        
    }

    @media(max-width: 480px){ 
      .user{
        font-size: 25px;
        text-transform:none;
        height: 10px;
        padding: 20px 0;
        
      }
    }
    
`;
 
const Input = styled.input`
    
    font-size: 30px; 
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid ${theme.grisClaro};
    outline: none;
    display: flex;

    ${props => props.expense && css`
        
        width: 100%;
        height: 40px;
        text-align: center;
        padding: 40px 0;
        font-family: 'Work Sans', sans-serif;
        display: block;
        font-size: 40px;

        &::placeholder {
            color: rgba(0,0,0,.2);

            
        }


    `}
  
 
    
    
    @media(max-width: 480px){ 
        
        ${props => props.expense && css`
        
        width: 100%;
        height: 40px;
        text-align: center;
        padding: 40px 0;
        font-family: 'Work Sans', sans-serif;
        display: block;
        font-size: 35px;
        
        
        &::placeholder {
            color: rgba(0,0,0,.2);
            
            
        }
        
        `}
        
    }
    
    
    
   
`
 
const InputLarge = styled(Input)`
    font-size: 50px;
    font-weight: bold;
      
    @media(max-width: 480px){ 
        
        ${props => props.expense && css`
        
        font-size: 40px;
    
        
        `}
        
    }
    
`;
 
const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px;
    


`;

export  {ContainerFilters, ContainerButton, InputLarge, Form, Input}