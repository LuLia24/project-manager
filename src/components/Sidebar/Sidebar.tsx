import ReactDOM from 'react-dom';
import { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import cl from './Sidebar.module.css';
import Logo from '../Logo';

type SidebarProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ children, isOpen, onClose }: SidebarProps) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`${cl.overlay}  ${isOpen ? cl.overlay_active : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`${cl.sidebar}  ${isOpen ? cl.sidebar_active : ''}`}>
        <div className={cl.sidebar__header}>
          <Logo onClose={onClose} />
          <button className={cl.button} onClick={onClose}>
            <span className={cl.closeIcon}></span>
          </button>
        </div>
        <hr className={cl.decorationLine}></hr>
        {children}
      </div>
      ;
    </div>,
    document.body
  );
};
