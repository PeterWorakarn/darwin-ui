import { TBlockType } from '../../../constant-enum-type/doc';

interface TBlock {
  type: TBlockType
}

const ComponentBlock: React.FC<TBlock> = (props) => {
  return (
    <div className={`${props.type === 'square' ? 'h-component-block-height items-center' : 'h-component-block-height items-start pt-20'} component-container`}>
      {props.children}
    </div>
  );
};

export default ComponentBlock;
