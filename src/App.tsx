import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FormContextProvider } from './context/FormContext';
import { Form } from './pages/Form';
import { Dashboard } from './pages/Dashboard';

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastrar-agremiacao' element={
          <FormContextProvider>
            <Form />
          </FormContextProvider>
        } />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
