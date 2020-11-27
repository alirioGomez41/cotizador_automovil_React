import React, { useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
import Resumen from './components/Resumen'
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #ffff;
  padding: 3rem;
  
`;

const SpinnerGiraGira = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;
function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year:'',
      plan:''
    }
  });
  const [cargando, guardarCargando] = useState(false);
  const {datos, cotizacion} = resumen;
  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando?
          <SpinnerGiraGira>
            <Spinner/>
          </SpinnerGiraGira>  
        :  
        <Resumen
          datos={datos}
        />

      }
        
        {!cargando?
        <Resultado
        cotizacion={cotizacion}  
      />:null  
      }
      </ContenedorFormulario> 
    </Contenedor>
  );
}

export default App;
