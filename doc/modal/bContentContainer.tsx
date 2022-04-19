import ButtonModal from './cButtonModal';
import ModalProvider from './aModalProvider';

const ModalContainer: React.FC = () => {
  return (
    <ModalProvider>
      <ButtonModal />
    </ModalProvider>
  );
};

export default ModalContainer;
