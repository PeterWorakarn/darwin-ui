import DrawerProvider from './aDrawerProvider';
import ButtonDrawer from './cButtonDrawer';

const DrawerContainer: React.FC = () => {
  return (
    <DrawerProvider>
      <ButtonDrawer />
    </DrawerProvider>
  );
};

export default DrawerContainer;
