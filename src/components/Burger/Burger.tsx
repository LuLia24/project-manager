import { useState } from 'react';
import { Sidebar } from '../Sidebar';
import { Link } from 'react-router-dom';
import cl from './Burger.module.css';
import { Navigation } from '../Navigation';

export const Burger = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShow = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <div className={cl.burger} onClick={handleShow}>
        <span className={cl.item}></span>
        <span className={cl.item}></span>
        <span className={cl.item}></span>
        <span className={cl.item}></span>
      </div>
      <Sidebar isOpen={showSidebar} onClose={handleShow}>
        <Navigation onClose={handleShow} />
      </Sidebar>
    </>
  );
};
