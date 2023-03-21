import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import theme from "../theme";
import { ReactComponent as IconDown } from "../img/down.svg";
import IconCategory from "../elements/IconCategory";


const SelectContainer = styled.div`
  background: ${theme.grisClaro};
  cursor: pointer;
  border-radius: 10px; 
  position: relative;
  height: 60px;
  width: 340px;
  padding: 0px 20px; 
  font-size: 22px; /* 24px */
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  
 
  
  &:hover {
    background: ${theme.grisClaro2};
  }

  
  @media screen and (max-width: 920px) {
     
      font-size: 20px;
        
    }
   
    @media screen and (max-width: 811px) {
     
      height: 50px;
       
   }
  

     
   @media screen and (max-width: 480px) {
     
     height: 60px;
     width: 300px;

   }     

  
`;

const OpctionSelect = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  svg {
    width: 16px; /* 20px */
    height: auto;
    margin-left: 20px; /* 20px */
  }
 
  
 
`;

const Opctions = styled.div`
  background: ${theme.grisClaro};
  position: absolute;
  top: 80px; /* 90px */
  left: 20px;
  width: 85%;
  border-radius: 0.625rem; /* 10px */
  max-height: 280px; /* 300px */
  overflow-y: auto;

  @media screen and (max-width: 920px) {
    max-height: 250px
        
    }
   
 

`;

const Opction = styled.div`
  padding: 20px; /* 20px */
  display: flex;
  svg {
    width: 28px;
    height: auto;
    margin-right: 20px; 
  }
  &:hover {
    background: ${theme.grisClaro2};
  }


`

function SelectCategories({categorie, setCategorie }) {
  
  const [showSelect, setShowSelect] = useState(false);
  const menuRef = useRef();

  const categories = [
    {id: 'Comida', text: 'Comida'},
    {id: 'Cuentas y pagos', text: 'Cuentas y pagos'},
    {id: 'Hogar', text: 'Hogar'},
    {id: 'Transporte', text: 'Transporte'},
    {id: 'Ropa', text: 'Ropa'},
    {id: 'Salud e Higiene', text: 'Salud e Higiene'},
    {id: 'Compras', text: 'Compras'},
    {id: 'Diversion', text: 'Diversion'},
    {id: 'Servicios', text: 'Servicios'},
    {id: 'Regalo', text: 'Regalo'}
]

const handleClick = (e)=>{
  
  setCategorie(e.currentTarget.dataset.value)
  
}

useEffect(()=>{

  const handleClick = (e)=>{

    if(!menuRef.current.contains(e.target)){
        setShowSelect(false)
    }
     
  }
   document.addEventListener("click", handleClick)

   return () => {
     document.removeEventListener("click", handleClick);
   }

}, [showSelect])

  return (
    <SelectContainer onClick={()=> setShowSelect(!showSelect)} ref={menuRef}>
      <OpctionSelect > {categorie} <IconDown /> </OpctionSelect>
      
      {showSelect && (
        <Opctions >
          {categories.map(categorie => (
            <Opction 
              key={categorie.id}
              data-value = {categorie.text}
              onClick={handleClick}
              
              >
              <IconCategory id={categorie.id}/>
              {categorie.text}
            </Opction>
          ))}
        </Opctions>
      )}
    </SelectContainer>
  );
}

export default SelectCategories;
