import { RegisterForm } from '../../components/RegisterForm';
import cl from './Register.module.css';

// type RegisterProps = {}

export const Register = () => {
  return (
    <div className={cl.register}>
      <RegisterForm action="submit" />
    </div>
  );
};
