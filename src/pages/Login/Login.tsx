import { LoginForm } from '../../components/LoginForm';
import cl from './Login.module.css';

// type LoginProps = {}

export const Login = () => {
  return (
    <div className={cl.login}>
      <LoginForm action="submit" />
    </div>
  );
};
