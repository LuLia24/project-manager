import cl from './Footer.module.css';

// type FooterProps = {}

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.wrap}>
        <p className={cl.text}>2023</p>
      </div>
    </footer>
  );
};
