import ButtonModal from './cButtonModal';
import ModalProvider from './aModalProvider';

const ContentContainer: React.FC = () => {
  return (
    <ModalProvider>
      <ButtonModal />
    </ModalProvider>
  );
};

export default ContentContainer;
