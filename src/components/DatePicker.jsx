import React,  {useState, useRef, useEffect} from 'react';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import format from 'date-fns/format'
import styled from 'styled-components';
import theme from '../theme';


const InputContainer = styled.div`
    position: relative;
    
   
  
    input {
        font-family: 'Work Sans', sans-serif;
        box-sizing: border-box;
        background: ${theme.grisClaro};
        border: none;
        cursor: pointer;
        border-radius: 10px; /* 10px */
        height: 50px;
        width: 100%;
        padding: 18px;
        font-size: 23px; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        
  
    }
 
    .rdp {
        position: absolute;
    }
 
    .rdp-months {
        display: flex;
        justify-content: center;
    }
 
    .rdp-month {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 10px;
        border-radius: 10px;
    
    }
   

    
      
`

const formatDate = (date = new Date()) =>{
 return  format(date, `dd 'de' MMMM 'de' yyyy`, {locale: es})
}

function DatePicker({date, setDate }) {
  const [visibility, setVisibility] = useState(false);
  const dateSpickerRef = useRef();

  useEffect(()=>{

    const handleClick = (e)=>{
  
      if(!dateSpickerRef.current.contains(e.target)){
          setVisibility(false)
      }
       
    }
     document.addEventListener("click", handleClick)
  
     return () => {
       document.removeEventListener("click", handleClick);
     }
  
  }, [visibility])
  

  return (  
    <InputContainer ref={dateSpickerRef}>
      <input 
         type="text" 
         readOnly 
         value={formatDate(date)}
         onClick={()=> setVisibility(!visibility)}
      />
      {visibility && (
        <DayPicker 
          mode='single'
          onSelect={setDate} 
          selected={date}
          locale={es} 
          />
      )}
    </InputContainer>
  )
}

export default DatePicker