import { modalStore } from '../modalStore';
import { useStore } from '@nanostores/react';
import Modal from './modal';

function Wrapper({ children }: { children: React.ReactNode }) {
  const modal = useStore(modalStore);
  return (
    <>
      {modal.isOpen ? <Modal /> : null}
      {children}
    </>
  );
}

export default Wrapper;
