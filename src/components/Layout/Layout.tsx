import { Outlet } from 'react-router-dom';
import cl from './Layout.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

// type LayoutProps = {}

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={cl.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
