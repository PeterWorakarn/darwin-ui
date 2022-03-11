import { TBlockType } from '../../../constant-enum-type/doc';

interface TBlock {
  type: TBlockType
}

const ComponentBlock: React.FC<TBlock> = (props) => {
  return (
    <section className={`${props.type === 'square' ? 'h-[580px]' : 'h-[580px]'} absolute z-30 w-[580px] mx-auto flex justify-center items-center rounded-xl overflow-hidden bg-gray-100 shadow-inner`}>
      {props.children}
    </section>
  );
};

export default ComponentBlock;
