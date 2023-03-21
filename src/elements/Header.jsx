import styled, { css } from "styled-components";

const Header = styled.div`
    width: 100%;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;

    @media screen and (max-width: 920px) {
        height: 15%;  
        min-width: 80%; 
    }
   
`;
 
const Title = styled.h1`
    font-weight:800;
    letter-spacing: 5;
    text-transform: uppercase;
    font-size: 32px; 
  

    
    
    @media(max-width: 920px){ 
        margin-bottom: 20px;
    }
    
    @media(max-width: 480px){ 
        font-size: 28px;
        letter-spacing: 4;
        text-align: center;
     
    }
    
    
    
`;
 
const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        padding: 0px  25px 25px 25px;
       
   }
     

 
@media(max-width: 920px){ 
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

   
}
   
    
`;
 
const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    
    
`;

export {Header, Title, ContainerHeader, ContainerButtons};



