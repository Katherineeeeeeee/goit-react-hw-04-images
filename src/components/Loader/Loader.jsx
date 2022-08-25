import s from './Loader.module.scss';
import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={s.loader}>
      <TailSpin color="#B01C63" height="150" width="150" />
    </div>
  );
}
