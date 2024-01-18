import React from 'react';
import { useRef, useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  hasCloseBtn,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(isOpen);
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen && !modalElement.open) {
        modalElement.showModal();
      } else if (!isModalOpen && modalElement.open) {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <div className="px-8">
      <dialog
        ref={modalRef}
        open={isModalOpen}
        className="fixed z-10 inset-0 overflow-y-auto w-fit h-fit"
        onKeyDown={handleKeyDown}
      >
        {hasCloseBtn && (
          <button
            className="absolute top-0 right-0 m-6 text-3xl font-bold text-[#A1A1AA] bg-transparent border-0 outline-none focus:outline-none"
            onClick={handleCloseModal}
          >
            <span className="block w-6 h-6 text-2xl text-[#A1A1AA] bg-transparent outline-none opacity-50">
              ×
            </span>
          </button>
        )}
        {children}
      </dialog>
    </div>
  );
};
