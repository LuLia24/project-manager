import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import cl from './App.module.css';
import { Layout } from '../Layout';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { NotFound } from '../../pages/NotFound';

export function App() {
  return (
    <div className={cl.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
