import { Burger } from '../Burger';
import { LangSelect } from '../LangSelect';
import cl from './Header.module.css';
import Logo from '../Logo';
import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../constants/constants';
import { Navigation } from '../Navigation';

// type HeaderProps = {}
const { windowWidthBP } = CONSTANTS;

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const isDesktop = windowWidth >= windowWidthBP;

  return (
    <header className={cl.header}>
      <div className={cl.items}>
        {isDesktop ? <Logo /> : <Burger />}
        <div className={cl.wrap}>
          {isDesktop && <Navigation />}
          <LangSelect />
        </div>
      </div>
    </header>
  );
};
