import { atom } from 'nanostores';

export const modalStore = atom({
  isOpen: false,
});

export const toggleModal = (state: boolean) => {
  modalStore.set({ isOpen: state });
};
