import { Button } from '../Button';
import { Input } from '../Input';
import cl from './LoginForm.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type LoginFormProps = {
  action: string;
};

type Inputs = {
  login: string;
  password: string;
};

const schema = yup
  .object({
    login: yup.string().required('Обязательное поле').min(2, 'Минимальная длинна 2'),
    password: yup.string().required('Обязательное поле').min(5, 'Минимальная длинна 5'),
  })
  .required();

export const LoginForm = ({ action }: LoginFormProps) => {
  const methods = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const {
    formState: { errors, isValid },
  } = methods;

  const handleReset = () => methods.reset();

  const onSubmit = (inputsValue: Inputs) => {
    handleReset();

    console.log(inputsValue);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className={cl.form} action={action} onSubmit={methods.handleSubmit(onSubmit)}>
          <p className={cl.title}>Войти</p>
          <div className={cl.input_wrap}>
            <Input type="text" placeholder="Логин" name="login" error={errors.login?.message} />
            <Input
              type="text"
              placeholder="Пароль"
              name="password"
              error={errors.password?.message}
            />
          </div>
          <div className={cl.button_wrap}>
            <Button buttonText="отправить" colorMod="blue" type="submit" disabled={!isValid} />
            <Button buttonText="сброс" colorMod="white" type="button" handleClick={handleReset} />
          </div>
        </form>
      </FormProvider>
    </>
  );
};
