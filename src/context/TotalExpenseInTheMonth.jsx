import React,{createContext,useContext,useState, useEffect} from 'react'
import useGetExpenseOfTheMonth from '../hooks/useGetExpeseOfTheMonth'


export const TotalExpenseContext = createContext()

//hook personalizado
export const useTotalExpense = () =>{
    return useContext(TotalExpenseContext)
} 

function TotalExpenseProvider({children}) {
    
  const [total, setTotal] = useState(0)
  const expensesMonth = useGetExpenseOfTheMonth();
 
  
  useEffect(()=>{
    

      let acumulated = 0;
 
         
        if(expensesMonth.length > 0){

              expensesMonth.forEach(expense => {

                 acumulated +=  expense.amount;  
              
            })  
            
            
          }  
      
          setTotal(acumulated) 

       
    }, [expensesMonth])

  return (
    <TotalExpenseContext.Provider value={{total, setTotal}}>
        {children}
    </TotalExpenseContext.Provider>     
  )
}

export default TotalExpenseProvider;