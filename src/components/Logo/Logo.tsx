import cl from './Logo.module.css';
import { Link } from 'react-router-dom';

type LogoProps = {
  onClose?: () => void;
};

const Logo = ({ onClose }: LogoProps) => {
  return (
    <Link to="/" className={cl.link} onClick={onClose}>
      <div className={cl.logo}>
        <span className={cl.logo_icon}></span>
      </div>
    </Link>
  );
};

export default Logo;
