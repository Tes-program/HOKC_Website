/* eslint-disable react/prop-types */
import { Modal } from './Dialog';

interface InformationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const InformationModal: React.FC<InformationModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn={true}>
      <div className="flex flex-col items-start justify-center px-16 py-8">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <p className="mt-4 text-base font-light text-center">{message}</p>
      </div>
    </Modal>
  );
};
