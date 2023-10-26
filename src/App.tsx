import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FormContextProvider } from './context/FormContext';
import { Form } from './pages/Form';
import { Dashboard } from './pages/Dashboard';
import StyledButton from './components/button'; 

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastrar-agremiacao' element={
          <FormContextProvider>
            <Form />
            {/* Botão estilizado aqui */}
            <StyledButton>Botão aqui</StyledButton>
          </FormContextProvider>
        } />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
