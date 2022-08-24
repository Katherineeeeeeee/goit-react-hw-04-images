import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ text, onClick }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   // onClick:
// };
export default Button;
