import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ text, onClick }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
