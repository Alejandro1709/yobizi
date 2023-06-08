import { useStore } from '@nanostores/react';
import { modalStore, toggleModal } from '../modalStore';
import './Modal.css';

function Modal() {
  const modal = useStore(modalStore);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <img src='/logobg.png' alt='Logo' />
        <ul className='social-logins'>
          <li>
            <button>Inicia sesión con Google</button>
          </li>
          <li>
            <button>Inicia sesión con Apple</button>
          </li>
          <li>
            <button>Inicia sesión con Facebook</button>
          </li>
        </ul>
        <form className='login-form'>
          <div className='input-container'>
            <div className='input-box'>
              <input type='text' placeholder='Nombre' />
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Email' />
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Password' />
            </div>
          </div>
          <button className='btn'>Regístrate</button>
          <button
            type='button'
            className='btn'
            onClick={() => toggleModal(false)}
          >
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
