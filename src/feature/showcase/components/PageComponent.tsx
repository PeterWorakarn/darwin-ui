import dynamic from 'next/dynamic';
import { TComponentName } from '../../../constant-enum-type/component';
// import SuggestComponent from '../../common/components/SuggestComponent';

const SuggestComponent = dynamic(import('../../common/components/SuggestComponent'), { ssr: true });

interface TPageComponent {
  currentComponent: TComponentName;
}

const PageComponent: React.FC<TPageComponent> = (props) => {
  return (
    <>
      <div className="component-page">
        {props.children}
      </div>
      <SuggestComponent currentComponent={props.currentComponent} />
    </>
  );
};

export default PageComponent;
