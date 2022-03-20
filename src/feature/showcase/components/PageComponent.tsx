import { TComponentName } from '../../../constant-enum-type/component';
import SuggestComponent from '../../common/components/SuggestComponent';

interface TPageComponent {
  currentComponent: TComponentName;
}

const PageComponent: React.FC<TPageComponent> = (props) => {
  return (
    <div>
      <div className="component-page">
        {props.children}
      </div>
      <SuggestComponent currentComponent={props.currentComponent} />
    </div>
  );
};

export default PageComponent;
