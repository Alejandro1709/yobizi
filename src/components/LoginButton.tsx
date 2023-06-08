import { toggleModal } from '../modalStore';
import './LoginButton.css';

function LoginButton() {
  return <button onClick={() => toggleModal(true)}>Login</button>;
}

export default LoginButton;
