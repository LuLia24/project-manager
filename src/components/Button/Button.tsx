import cl from './Button.module.css';

type ButtonProps = {
  buttonText: string;
  colorMod: string;
  type: 'button' | 'reset' | 'submit' | undefined;
  handleClick?: () => void;
  disabled?: boolean;
};

export const Button = ({ buttonText, colorMod, type, handleClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`${cl.button} ${cl[`button_${colorMod}`]}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};
