import cl from './Input.module.css';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  type: string;
  placeholder: string;
  error: string | undefined;
  name: string;
};

export const Input = ({ type, placeholder, name, error }: InputProps) => {
  const { register } = useFormContext();

  return (
    <label className={cl.label}>
      <input className={cl.input} type={type} placeholder={placeholder} {...register(name)} />

      <span className={cl.errText}>{error ? error : ''}</span>
    </label>
  );
};
