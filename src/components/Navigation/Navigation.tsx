import { Link } from 'react-router-dom';
import cl from './Navigation.module.css';

type NavigationProps = {
  onClose?: () => void;
};

export const Navigation = ({ onClose }: NavigationProps) => {
  return (
    <nav className={cl.navigation}>
      <Link to="signin" className={cl.link} onClick={onClose}>
        Авторизация
      </Link>
      <Link to="signup" className={cl.link} onClick={onClose}>
        Регистрация
      </Link>
    </nav>
  );
};
