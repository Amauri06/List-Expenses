import styled from 'styled-components';

const Container = styled.div`
    background: #fff;
    width: 80%;
    min-width: 900px;
    height: 90vh;
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0.625rem; /* 10px */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 100;
    
    
 

    @media screen and (max-width: 920px) {
        min-width: 800px;
        height: 95vh;
    }
    
    @media screen and (max-width: 810px) {
        min-width: 700px;
        height: 100vh;
        
    }

    @media screen and (max-width: 740px) {
        min-width: 600px;
        
    }

    @media screen and (max-width: 640px) {
        min-width: 500px;
        
    }

    @media screen and (max-width: 520px) {
        min-width: 400px;
        
    }

    @media screen and (max-width: 480px) {
       width: 100%;
       height: 100vh;
       padding-top: 10px;
        
    }
`;

export default Container;


// @media(max-width: 60rem){ /* 950px */
// height: 95vh;
// max-height: none;
// }